#include "./irsdk_node.h"

using namespace v8;

Nan::Persistent<Function> iRacingSdkNode::constructor;

iRacingSdkNode::iRacingSdkNode() : _defaultTimeout(16) {}
iRacingSdkNode::~iRacingSdkNode()
{
  // Just in case...
  irsdk_shutdown();
}

irsdkCVar* iRacingSdkNode::_telemVars = new irsdkCVar();

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
  Nan::SetPrototypeMethod(tmpl, "getHeader", GetHeader);
  Nan::SetPrototypeMethod(tmpl, "getSessionData", GetSessionData);
  Nan::SetPrototypeMethod(tmpl, "getTelemetryData", GetTelemetryData);
  Nan::SetPrototypeMethod(tmpl, "broadcast", BroadcastMessage);

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

// Control
void iRacingSdkNode::StartSdk(const Nan::FunctionCallbackInfo<Value>& info)
{
  if (!irsdkClient::instance().isConnected()) {
    info.GetReturnValue().Set(irsdk_startup());
    return;
  }
  info.GetReturnValue().Set(true);
}

void iRacingSdkNode::StopSdk(const Nan::FunctionCallbackInfo<Value>& info)
{
  irsdk_shutdown();
  info.GetReturnValue().SetUndefined();
}

void iRacingSdkNode::IsRunning(const Nan::FunctionCallbackInfo<Value>& info)
{
  info.GetReturnValue().Set(irsdkClient::instance().isConnected());
}

void iRacingSdkNode::WaitForData(const Nan::FunctionCallbackInfo<Value>& info)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  
  // Figure out the time to wait
  // This will default to the timeout set on the class
  const Nan::Maybe<int> timeout = Nan::To<int>(info[0]);
  if (!irsdkClient::instance().isConnected()) {
    irsdk_startup();
  }
  
  // @todo: try to do this async instead
  printf("Attempting to wait for data (timeout: %d)", timeout.FromMaybe(holder->_defaultTimeout));
  irsdkClient::instance().waitForData(timeout.FromMaybe(holder->_defaultTimeout));
  printf("done!");
}

// Data getters
void iRacingSdkNode::GetHeader(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  info.GetReturnValue().Set(true);
}

void iRacingSdkNode::GetSessionData(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  const char* sessionData = irsdkClient::instance().getSessionStr();
  info.GetReturnValue().Set(Nan::New(sessionData).ToLocalChecked());
}

void iRacingSdkNode::GetTelemetryData(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  Local<Context> context = Nan::GetCurrentContext();
  const irsdk_header* header = irsdk_getHeader();

  auto telemVars = Nan::New<Object>();
  auto telemEntry = Nan::New<Object>();
  const irsdk_varHeader *headerVar;

  bool boolVal;
  int32_t intVal;
  float floatVal;
  double doubleVal;

  int count = header->numVars;
  for (int i = 0; i < count; i++) {
    headerVar = irsdk_getVarHeaderEntry(i);

    // Create entry object
    telemEntry->Set(context,
                    Nan::New("countAsTime").ToLocalChecked(),
                    Nan::New(headerVar->countAsTime));
    telemEntry->Set(context,
                    Nan::New("length").ToLocalChecked(),
                    Nan::New(headerVar->count));
    telemEntry->Set(context,
                    Nan::New("name").ToLocalChecked(),
                    Nan::New(headerVar->name).ToLocalChecked());
    telemEntry->Set(context,
                    Nan::New("description").ToLocalChecked(),
                    Nan::New(headerVar->desc).ToLocalChecked());
    telemEntry->Set(context,
                    Nan::New("unit").ToLocalChecked(),
                    Nan::New(headerVar->unit).ToLocalChecked());
    telemEntry->Set(context,
                    Nan::New("varType").ToLocalChecked(),
                    Nan::New(headerVar->type));
    
    // @todo: these are not correct. (bools are, all numbers are not)
    if (headerVar->count == 1) {
      switch(headerVar->type)
      {
        case irsdk_VarType::irsdk_bool:
          boolVal = irsdkClient::instance().getVarBool(i, 0);
          printf("Got bool: %d\n", boolVal);
          telemEntry->Set(context,
                      Nan::New("value").ToLocalChecked(),
                      Nan::New(boolVal));
          break;
        case irsdk_VarType::irsdk_int:
          intVal = irsdkClient::instance().getVarInt(i, 0);
          printf("Got int: %d\n", intVal);
          telemEntry->Set(context,
                      Nan::New("value").ToLocalChecked(),
                      Nan::New(intVal));
          break;
        case irsdk_VarType::irsdk_float:
          floatVal = irsdkClient::instance().getVarFloat(i, 0);
          printf("Got float: %f\n", floatVal);
          telemEntry->Set(context,
                      Nan::New("value").ToLocalChecked(),
                      Nan::New(floatVal));
          break;
        case irsdk_VarType::irsdk_double:
          doubleVal = irsdkClient::instance().getVarDouble(i, 0);
          printf("Got double: %f\n", doubleVal);
          telemEntry->Set(context,
                      Nan::New("value").ToLocalChecked(),
                      Nan::New(doubleVal));
          break;
      }
    }

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

// Addon initialization
void InitAddon(Local<Object> exports)
{
  iRacingSdkNode::Init(exports);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, InitAddon);
