#include "./irsdk_node.h"
#include "../lib/yaml_parser.h"

using namespace v8;

Nan::Persistent<Function> iRacingSdkNode::constructor;

iRacingSdkNode::iRacingSdkNode()
                : _defaultTimeout(16)
                , _data(NULL)
                , _bufLineLen(0)
                , _sessionStatusID(0)
                , _lastSessionCt(-1)
                , _sessionData(NULL) {}
iRacingSdkNode::~iRacingSdkNode()
{
  // Just in case...
  irsdk_shutdown();
}

// Improve @see https://nodejs.org/api/addons.html#wrapping-c-objects
// Boilerplate setup
void iRacingSdkNode::Init(Local<Object> exports)
{
  Local<Context> context = exports->CreationContext();
  Nan::HandleScope scope;

  // Prepare constructor template
  
  Local<FunctionTemplate> tmpl = Nan::New<FunctionTemplate>(New);
  tmpl->SetClassName(Nan::New("iRacingSdkNode").ToLocalChecked());
  tmpl->InstanceTemplate()->SetInternalFieldCount(1);

  // Properties
  // This is causing field count assertion failures
  Nan::SetAccessor(tmpl->InstanceTemplate(), 
                  Nan::New("defaultTimeout").ToLocalChecked(), 
                  GetDefaultTimeout,
                  SetDefaultTimeout);

  // Prototype Methods
  Nan::SetPrototypeMethod(tmpl, "startSDK", StartSdk);
  Nan::SetPrototypeMethod(tmpl, "stopSDK", StopSdk);
  Nan::SetPrototypeMethod(tmpl, "isRunning", IsRunning);
  Nan::SetPrototypeMethod(tmpl, "waitForData", WaitForData);
  Nan::SetPrototypeMethod(tmpl, "getSessionData", GetSessionData);
  Nan::SetPrototypeMethod(tmpl, "getTelemetryData", GetTelemetryData);
  Nan::SetPrototypeMethod(tmpl, "broadcast", BroadcastMessage);
  
  // Helper Script Methods
  Nan::SetPrototypeMethod(tmpl, "__getTelemetryTypes", __GetTelemetryTypes);

  // Create export
  constructor.Reset(tmpl->GetFunction(context).ToLocalChecked());
  exports->Set(context,
              Nan::New("iRacingSdkNode").ToLocalChecked(),
              tmpl->GetFunction(context).ToLocalChecked());
}

void iRacingSdkNode::New(const Nan::FunctionCallbackInfo<Value>& info)
{
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    
  // invoked as constructor
  if (info.IsConstructCall()) {
    iRacingSdkNode* instance = new iRacingSdkNode();
    instance->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
  } else {
    // Invoked as a plain fn, convert to construct call
    /**
     * to get the args:
     * const int argc = 1;
     * Local<v8::Value> argv[argc] = {info[0]};
     */
    const int argc = 1;
    v8::Local<v8::Value> argv[argc] = {};
    v8::Local<v8::Function> cnstrct = Nan::New<v8::Function>(constructor);
    info.GetReturnValue().Set(
        cnstrct->NewInstance(context, argc, argv).ToLocalChecked());
  }
}

// Properties
NAN_GETTER(iRacingSdkNode::GetDefaultTimeout)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  info.GetReturnValue().Set(Nan::New(holder->_defaultTimeout));
}
NAN_SETTER(iRacingSdkNode::SetDefaultTimeout)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  const Nan::Maybe<int> timeout = Nan::To<int>(value);
  if (!timeout.IsNothing()) {
    holder->_defaultTimeout = timeout.FromJust();
  }
}

// Helpers
bool iRacingSdkNode::GetTelemetryBool(int entry, int index)
{
  const irsdk_varHeader *headerVar = irsdk_getVarHeaderEntry(entry);
  return *(reinterpret_cast<bool const *>(_data + headerVar->offset) + index);
}

int iRacingSdkNode::GetTelemetryInt(int entry, int index)
{
  // Each int is 4 bytes
  const irsdk_varHeader *headerVar = irsdk_getVarHeaderEntry(entry);
  return *(reinterpret_cast<int const *>(_data + headerVar->offset) + index * 4);
}

float iRacingSdkNode::GetTelemetryFloat(int entry, int index)
{
  // Each float is 4 bytes
  const irsdk_varHeader *headerVar = irsdk_getVarHeaderEntry(entry);
  return *(reinterpret_cast<float const *>(_data + headerVar->offset) + index * 4);
}

double iRacingSdkNode::GetTelemetryDouble(int entry, int index)
{
  // Each double is 8 bytes
  const irsdk_varHeader *headerVar = irsdk_getVarHeaderEntry(entry);
  return *(reinterpret_cast<double const *>(_data + headerVar->offset) + index * 8);
}

// Control
NAN_METHOD(iRacingSdkNode::StartSdk)
{
  // @todo: store this in class
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());

  if (!irsdk_isConnected()) {
    bool result = irsdk_startup();
    info.GetReturnValue().Set(result);
  }

  info.GetReturnValue().Set(true);
}

NAN_METHOD(iRacingSdkNode::StopSdk)
{
  irsdk_shutdown();
  info.GetReturnValue().Set(true);
}

NAN_METHOD(iRacingSdkNode::IsRunning)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());

  bool result = irsdk_isConnected();
  info.GetReturnValue().Set(result);
}

NAN_METHOD(iRacingSdkNode::WaitForData)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  
  // Figure out the time to wait
  // This will default to the timeout set on the class
  const Nan::Maybe<int> timeout = Nan::To<int>(info[0]);

  if (!irsdk_isConnected() && !irsdk_startup()) {
    info.GetReturnValue().Set(false);
  }

  // @todo: try to do this async instead
  int waitForMs = timeout.FromMaybe(holder->_defaultTimeout);
  printf("Attempting to wait for data (timeout: %d)\n", waitForMs);

  const irsdk_header* header = irsdk_getHeader();

  // @todo: This isn't the best way of doing this. Need to improve, but this works for now
  if (!holder->_data) {
    printf("Data is not initialized");
    info.GetReturnValue().Set(false);
    holder->_data = new char[header->bufLen];
  }

  // wait for start of sesh or new data
  bool dataReady = irsdk_waitForDataReady(waitForMs, holder->_data);
  if (dataReady && header)
  {
    printf("Session started or we have new data.\n");

    // New connection or data changed length
    if (holder->_bufLineLen != header->bufLen) {
      printf("Connection started / data changed length.\n");

      holder->_bufLineLen = header->bufLen;

      // Increment connection
      holder->_sessionStatusID++;

      // Reset info str status
      holder->_lastSessionCt = -1;
      info.GetReturnValue().Set(true);
      return;
    } else if (holder->_data) {
      printf("Data initialized and ready to process.\n");
      // already initialized and ready to process
      info.GetReturnValue().Set(true);
      return;
    }
  }
  else if (!(holder->_data != NULL && irsdk_isConnected()))
  {
    printf("Session ended. Cleaning up.\n");
    // Session ended
    if (holder->_data) delete[] holder->_data;
    holder->_data = NULL;

    // Reset Info str
    holder->_lastSessionCt = -1;
  }
  printf("Session ended or something went wrong. Not successful.\n");
  info.GetReturnValue().Set(false);
}

// Data getters
NAN_METHOD(iRacingSdkNode::GetSessionData)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  int latestUpdate = irsdk_getSessionInfoStrUpdate();
  if (holder->_lastSessionCt != latestUpdate) {
    printf("Session data has been updated (prev: %d, new: %d)", holder->_lastSessionCt, latestUpdate);
    holder->_lastSessionCt = latestUpdate;
    holder->_sessionData = irsdk_getSessionInfoStr();
  }
  info.GetReturnValue().Set(Nan::New(holder->_sessionData).ToLocalChecked());
}

NAN_METHOD(iRacingSdkNode::GetTelemetryData)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());

  Local<Context> context = Nan::GetCurrentContext();
  const irsdk_header* header = irsdk_getHeader();

  auto telemVars = Nan::New<Object>();
  auto telemEntry = Nan::New<Object>();
  const irsdk_varHeader *headerVar;

  bool boolVal = false;
  int32_t intVal = 0;
  float floatVal = 0.0F;
  double doubleVal = 0.0;

  Local<Array> entryVal;
  Local<String> valueLabel = Nan::New("value").ToLocalChecked();
  Local<String> isTimeLabel = Nan::New("countAsTime").ToLocalChecked();
  Local<String> lenLabel = Nan::New("length").ToLocalChecked();
  Local<String> nameLabel = Nan::New("name").ToLocalChecked();
  Local<String> descLabel = Nan::New("description").ToLocalChecked();
  Local<String> unitLabel = Nan::New("unit").ToLocalChecked();
  Local<String> typeLabel = Nan::New("varType").ToLocalChecked();

  int count = header->numVars;
  for (int i = 0; i < count; i++) {
    headerVar = irsdk_getVarHeaderEntry(i);

    // Create entry object
    telemEntry->Set(context, isTimeLabel, Nan::New(headerVar->countAsTime));
    telemEntry->Set(context, lenLabel, Nan::New(headerVar->count));
    telemEntry->Set(context, nameLabel, Nan::New(headerVar->name).ToLocalChecked());
    telemEntry->Set(context, descLabel, Nan::New(headerVar->desc).ToLocalChecked());
    telemEntry->Set(context, unitLabel, Nan::New(headerVar->unit).ToLocalChecked());
    telemEntry->Set(context, typeLabel, Nan::New(headerVar->type));
    
    entryVal = Nan::New<Array>();
    for (int e = 0; e < headerVar->count; e++) {
      switch(headerVar->type)
      {
        case irsdk_VarType::irsdk_bool:
          entryVal->Set(context, e, Nan::New(holder->GetTelemetryBool(i, e)));
          break;

        case irsdk_VarType::irsdk_int:
          entryVal->Set(context, e, Int32::New(info.GetIsolate(), holder->GetTelemetryInt(i, e)));
          //entryVal = Int32::New(info.GetIsolate(), holder->GetTelemetryInt(i));
          break;

        case irsdk_VarType::irsdk_float:
          entryVal->Set(context, e, Int32::New(info.GetIsolate(), holder->GetTelemetryFloat(i, e)));
          break;

        case irsdk_VarType::irsdk_double:
          entryVal->Set(context, e, Int32::New(info.GetIsolate(), holder->GetTelemetryDouble(i, e)));
          break;
      }
    }
  
   telemEntry->Set(context, valueLabel, entryVal->Clone());

    printf("index: %d\tname: %s\n", i, irsdk_getVarHeaderEntry(i)->name);
    telemVars->Set(context, Nan::New(headerVar->name).ToLocalChecked(), telemEntry->Clone());
  }

  info.GetReturnValue().Set(telemVars);
}

// Broadcasting
NAN_METHOD(iRacingSdkNode::BroadcastMessage)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());

  // Determine message type
  Nan::Maybe<int> msgEnumIndex = Nan::To<int>(info[0]);
  irsdk_BroadcastMsg msgType = static_cast<irsdk_BroadcastMsg>(msgEnumIndex.FromJust());

  // Args
  int arg1 = Nan::To<int>(info[1]).FromJust();
  Local<Number> arg2 = info[2].As<Number>();
  Nan::Maybe<int> arg3 = Nan::To<int>(info[3]);

  // these defs are in irsdk_defines.cpp
  switch (msgType)
  {
  // irsdk_BroadcastMsg msg, int arg1, int arg2, int var3
  case irsdk_BroadcastCamSwitchPos: // @todo we need to use irsdk_padCarNum for arg1
  case irsdk_BroadcastCamSwitchNum:
    printf("BroadcastMessage(msgType: %d, arg1: %d, arg2: %d, arg3: %d)\n", msgType, arg1, Nan::To<int>(arg2).FromMaybe(1), arg3.FromMaybe(-1));
    irsdk_broadcastMsg(msgType, arg1, Nan::To<int>(arg2).FromMaybe(1), arg3.FromMaybe(-1));
    break;
  
  // irsdk_BroadcastMsg msg, int arg1, int unused, int unused
  case irsdk_BroadcastReplaySearch: // arg1 == irsdk_RpySrchMode
  case irsdk_BroadcastReplaySetState: // arg1 == irsdk_RpyStateMode
  case irsdk_BroadcastCamSetState: // arg1 == irsdk_CameraState
  case irsdk_BroadcastTelemCommand: // arg1 == irsdk_TelemCommandMode
  case irsdk_BroadcastVideoCapture: // arg1 == irsdk_VideoCaptureMode
    printf("BroadcastMessage(msgType: %d, arg1: %d, arg2: -1, arg3: -1)\n", msgType, arg1);
    irsdk_broadcastMsg(msgType, arg1, -1, -1);
    break;

  // irsdk_BroadcastMsg msg, int arg1, int arg2, int unused
  case irsdk_BroadcastReloadTextures: // arg1 == irsdk_ReloadTexturesMode
  case irsdk_BroadcastChatComand: // arg1 == irsdk_ChatCommandMode
  case irsdk_BroadcastReplaySetPlaySpeed:
    printf("BroadcastMessage(msgType: %d, arg1: %d, arg2: %d, arg3: -1)\n", msgType, arg1, Nan::To<int>(arg2).FromMaybe(1));
    irsdk_broadcastMsg(msgType, arg1, Nan::To<int>(arg2).FromMaybe(1), -1);
    break;
  
  // irsdk_BroadcastMsg msg, int arg1, float arg2
  case irsdk_BroadcastPitCommand: // arg1 == irsdk_PitCommandMode
  case irsdk_BroadcastFFBCommand: // arg1 == irsdk_FFBCommandMode
  case irsdk_BroadcastReplaySearchSessionTime:
  case irskd_BroadcastReplaySetPlayPosition:
    printf("BroadcastMessage(msgType: %d, arg1: %d, arg2: %f)\n", msgType, arg1, (float) Nan::To<double>(arg2).FromMaybe(1));
    irsdk_broadcastMsg(msgType, arg1, (float) Nan::To<double>(arg2).FromMaybe(1));
    break;

  default:
    printf("Attempted to broadcast an unsupported message.");
    info.GetReturnValue().Set(false);
    return;
  }

  info.GetReturnValue().Set(true);
}

// Helper Scripts
NAN_METHOD(iRacingSdkNode::__GetTelemetryTypes)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  Local<Context> context = Nan::GetCurrentContext();
  Local<Object> result = Nan::New<Object>();

  const int count = irsdk_getHeader()->numVars;
  const irsdk_varHeader *varHeader;
  for (int i = 0; i < count; i++) {
    varHeader = irsdk_getVarHeaderEntry(i);
    result->Set(context,
                Nan::New(varHeader->name).ToLocalChecked(),
                Nan::New(varHeader->type));
  }

  info.GetReturnValue().Set(result->Clone());
}

// Addon initialization
void InitAddon(Local<Object> exports)
{
  iRacingSdkNode::Init(exports);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, InitAddon);
