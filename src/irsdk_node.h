#ifndef IRSDK_NODE_H
#define IRSDK_NODE_H

#include <nan.h>

class iRacingSdkNode : public Nan::ObjectWrap
{
public:
    static void Init(v8::Local<v8::Object> exports);

private:
    explicit iRacingSdkNode();
    ~iRacingSdkNode();

    static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void GetInit(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static Nan::Persistent<v8::Function> constructor;

    bool _init;
};

#endif
