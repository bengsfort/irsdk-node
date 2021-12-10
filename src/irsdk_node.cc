#include "./irsdk_node.h"

using namespace v8;

Nan::Persistent<Function> iRacingSdkNode::constructor;

iRacingSdkNode::iRacingSdkNode() : _init(true) {}
iRacingSdkNode::~iRacingSdkNode() {}

// Improve @see https://nodejs.org/api/addons.html#wrapping-c-objects
// Boilerplate setup
void iRacingSdkNode::Init(Local<Object> exports)
{
  Local<Context> context = exports->CreationContext();
  Nan::HandleScope scope;

  // Prepare constructor template
  v8::Local<v8::FunctionTemplate> tmpl = Nan::New<v8::FunctionTemplate>(New);
  tmpl->SetClassName(Nan::New("iRacingSdkNode").ToLocalChecked());
  tmpl->InstanceTemplate()->SetInternalFieldCount(0);

  // Prototype
  Nan::SetPrototypeMethod(tmpl, "init", GetInit);

  // Create export
  constructor.Reset(tmpl->GetFunction(context).ToLocalChecked());
  exports->Set(context, Nan::New("iRacingSdkNode").ToLocalChecked(), tmpl->GetFunction(context).ToLocalChecked());
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

void iRacingSdkNode::GetInit(const Nan::FunctionCallbackInfo<Value>& info)
{
  iRacingSdkNode* obj = ObjectWrap::Unwrap<iRacingSdkNode>(info.Holder());
  info.GetReturnValue().Set(Nan::New(obj->_init));
}

// Addon initialization
void InitAddon(Local<Object> exports)
{
  iRacingSdkNode::Init(exports);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, InitAddon);
