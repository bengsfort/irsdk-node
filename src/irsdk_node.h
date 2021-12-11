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

    static Nan::Persistent<v8::Function> constructor;
    static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);
    
    // Properties
    static NAN_GETTER(GetDefaultTimeout);
    static NAN_SETTER(SetDefaultTimeout);

    // Methods
    static void StartSdk(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void StopSdk(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void IsRunning(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void WaitForData(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void GetHeader(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void GetSessionData(const Nan::FunctionCallbackInfo<v8::Value>& info);
    static void GetTelemetryData(const Nan::FunctionCallbackInfo<v8::Value>& info);

    // @todo: prob need to refactor these so we can have different instances
    static char* _irsdkData;
    static int _irsdkDataLen;
    int _defaultTimeout;
};

#endif
