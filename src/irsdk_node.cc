#include "./irsdk_node.h"
#include "../lib/irsdk_defines.h"
#include "../lib/irsdk_client.h"

using namespace v8;

Nan::Persistent<Function> iRacingSdkNode::constructor;

iRacingSdkNode::iRacingSdkNode() : _defaultTimeout(16) {}
iRacingSdkNode::~iRacingSdkNode()
{
  // Just in case...
  irsdk_shutdown();
}

char* iRacingSdkNode::_irsdkData = NULL;
int iRacingSdkNode::_irsdkDataLen = 0;

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
  if (!irsdk_isConnected()) {
    info.GetReturnValue().Set(irsdk_startup());
    return;
  }
  info.GetReturnValue().Set(false);
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
  info.GetReturnValue().Set(true);
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
