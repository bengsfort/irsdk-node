#include "./irsdk_node.h"
#include "../lib/irsdk_defines.h"

using namespace v8;

Nan::Persistent<Function> iRacingSdkNode::constructor;

iRacingSdkNode::iRacingSdkNode() : _defaultTimeout(30) {}
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
  info.GetReturnValue().Set(irsdk_isConnected());
}

void iRacingSdkNode::WaitForData(const Nan::FunctionCallbackInfo<Value>& info)
{
  iRacingSdkNode* holder = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  
  // Figure out the time to wait
  // This will default to the timeout set on the class
  const Nan::Maybe<int> timeout = Nan::To<int>(info[0]);
  bool result = irsdk_waitForDataReady(timeout.FromMaybe(holder->_defaultTimeout), _irsdkData);
}

// Data getters
void iRacingSdkNode::GetHeader(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  info.GetReturnValue().Set(true);
}

void iRacingSdkNode::GetSessionData(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  info.GetReturnValue().Set(true);
}
void iRacingSdkNode::GetTelemetryData(const Nan::FunctionCallbackInfo<v8::Value>& info)
{
  info.GetReturnValue().Set(true);
}

// void iRacingSdkNode::GetInit(const Nan::FunctionCallbackInfo<Value>& info)
// {
//   iRacingSdkNode* obj = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
//   info.GetReturnValue().Set(Nan::New(obj->_init));
// }

// Addon initialization
void InitAddon(Local<Object> exports)
{
  iRacingSdkNode::Init(exports);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, InitAddon);
