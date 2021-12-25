#ifndef IRSDK_NODE_H
#define IRSDK_NODE_H

#include <nan.h>
#include "../lib/irsdk_defines.h"
#include "../lib/irsdk_client.h"

class iRacingSdkNode : public Nan::ObjectWrap
{
public:
    static void Init(v8::Local<v8::Object> exports);

    // Helpers
    bool GetTelemetryBool(int entry, int index = 0);
    int GetTelemetryInt(int entry, int index = 0);
    float GetTelemetryFloat(int entry, int index = 0);
    double GetTelemetryDouble(int entry, int index = 0);

private:
    explicit iRacingSdkNode();
    ~iRacingSdkNode();

    static Nan::Persistent<v8::Function> constructor;
    static void New(const Nan::FunctionCallbackInfo<v8::Value>& info);
    
    // Properties
    static NAN_GETTER(GetDefaultTimeout);
    static NAN_SETTER(SetDefaultTimeout);

    // Methods
    static NAN_METHOD(StartSdk);
    static NAN_METHOD(StopSdk);
    static NAN_METHOD(IsRunning);
    static NAN_METHOD(WaitForData);
    static NAN_METHOD(GetSessionData);
    static NAN_METHOD(GetTelemetryData);
    static NAN_METHOD(BroadcastMessage);

    // Helper Scripts
    static NAN_METHOD(__GetTelemetryTypes);

    // @todo: add support for dumping data to a file + loading from file
    static irsdkCVar* _telemVars;

    int _defaultTimeout;
    char* _data;
    int _bufLineLen;
    int _sessionStatusID;
    int _lastSessionCt;
};

#endif
