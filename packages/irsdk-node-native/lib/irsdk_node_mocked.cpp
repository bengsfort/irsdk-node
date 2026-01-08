#include "./irsdk_node.h"
#include "./yaml_parser.h"

const char *MOCK_PROP_NAME = "__mocked";

// ---------------------------
// Constructors
// ---------------------------
Napi::Object iRacingSdkNode::Init(Napi::Env env, Napi::Object exports)
{
  Napi::Function func = DefineClass(env, "iRacingSdkNode", {
                                                               // Properties
                                                               InstanceAccessor<&iRacingSdkNode::_napi_prop_getCurrSessionDataVer>("currDataVersion"),
                                                               InstanceAccessor<&iRacingSdkNode::_napi_prop_getEnableLogging, &iRacingSdkNode::_napi_prop_setEnableLogging>("enableLogging"),
                                                               InstanceAccessor<&iRacingSdkNode::_napi_prop_getIsMocked>("isMocked"),

                                                               // Methods
                                                               // Control
                                                               InstanceMethod<&iRacingSdkNode::_napi_startSdk>("startSDK"),
                                                               InstanceMethod("stopSDK", &iRacingSdkNode::_napi_stopSdk),
                                                               InstanceMethod("waitForData", &iRacingSdkNode::_napi_waitForData),
                                                               InstanceMethod("broadcast", &iRacingSdkNode::_napi_broadcastMessage),
                                                               // Getters
                                                               InstanceMethod("isRunning", &iRacingSdkNode::_napi_isRunning),
                                                               InstanceMethod("getSessionVersionNum", &iRacingSdkNode::_napi_getSessionVersionNum),
                                                               InstanceMethod("getSessionData", &iRacingSdkNode::_napi_getSessionData),
                                                               InstanceMethod("getTelemetryData", &iRacingSdkNode::_napi_getTelemetryData),
                                                               InstanceMethod("getTelemetryVariable", &iRacingSdkNode::GetTelemetryVar),
                                                               // Helpers
                                                               InstanceMethod("__getTelemetryTypes", &iRacingSdkNode::_napi_getTelemetryTypes),
                                                           });

  Napi::FunctionReference *constructor = new Napi::FunctionReference();
  *constructor = Napi::Persistent(func);
  env.SetInstanceData(constructor);

  exports.Set("iRacingSdkNode", func);
  return exports;
}

iRacingSdkNode::iRacingSdkNode(const Napi::CallbackInfo &info)
    : Napi::ObjectWrap<iRacingSdkNode>(info), _data(NULL), _bufLineLen(0), _sessionStatusID(0), _lastSessionCt(-1), _sessionData(NULL), _loggingEnabled(false)
{
  printf("Initializing mock iRacingSdkNode\n");
}

// ---------------------------
// Property implementations
// ---------------------------
Napi::Value iRacingSdkNode::_napi_prop_getCurrSessionDataVer(const Napi::CallbackInfo &info)
{
  int ver = this->_lastSessionCt;
  return Napi::Number::New(info.Env(), ver);
}

Napi::Value iRacingSdkNode::_napi_prop_getEnableLogging(const Napi::CallbackInfo &info)
{
  bool enabled = this->_loggingEnabled;
  return Napi::Boolean::New(info.Env(), enabled);
}

void iRacingSdkNode::_napi_prop_setEnableLogging(const Napi::CallbackInfo &info, const Napi::Value &value)
{
  Napi::Boolean enable;
  if (info.Length() <= 0 || !info[0].IsBoolean())
  {
    enable = Napi::Boolean::New(info.Env(), false);
  }
  else
  {
    enable = info[0].As<Napi::Boolean>();
  }
  this->_loggingEnabled = enable;
  if (this->_loggingEnabled)
    printf("iRacingSDK Logging enabled\n");
}

Napi::Value iRacingSdkNode::_napi_prop_getIsMocked(const Napi::CallbackInfo &info)
{
  return Napi::Boolean::New(info.Env(), true);
}

// ---------------------------
// Instance implementations
// ---------------------------
// SDK Control
Napi::Value iRacingSdkNode::_napi_startSdk(const Napi::CallbackInfo &info)
{
  if (this->_loggingEnabled)
    printf("Starting Mock SDK...\n");
  return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::_napi_stopSdk(const Napi::CallbackInfo &info)
{
  return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::_napi_waitForData(const Napi::CallbackInfo &info)
{
  return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::_napi_broadcastMessage(const Napi::CallbackInfo &info)
{
  auto env = info.Env();

  // Determine message type
  if (info.Length() <= 2 || !info[0].IsNumber())
  {
    return Napi::Boolean::New(env, false);
  }

  if (info.Length() == 4 && !info[2].IsNumber())
  {
    return Napi::Boolean::New(env, false);
  }

  return Napi::Boolean::New(env, true);
}

// SDK State Getters
Napi::Value iRacingSdkNode::_napi_isRunning(const Napi::CallbackInfo &info)
{
  return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::_napi_getSessionVersionNum(const Napi::CallbackInfo &info)
{
  return Napi::Number::New(info.Env(), 1);
}

Napi::Value iRacingSdkNode::_napi_getSessionData(const Napi::CallbackInfo &info)
{
  return Napi::String::New(info.Env(), MOCK_PROP_NAME);
}

Napi::Value iRacingSdkNode::GetTelemetryVar(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  int varIndex;
  if (info.Length() <= 0)
  {
    varIndex = 0;
  }
  else if (!info[0].IsNumber())
  {
    if (info[0].IsString())
    {
      auto obj = Napi::Object::New(env);
      obj.Set(MOCK_PROP_NAME, true);
      return obj;
    }

    varIndex = 0;
  }

  return this->GetTelemetryVarByIndex(env, varIndex);
}

Napi::Value iRacingSdkNode::_napi_getTelemetryData(const Napi::CallbackInfo &info)
{
  auto env = info.Env();
  auto telemVars = Napi::Object::New(env);
  telemVars.Set(MOCK_PROP_NAME, true);
  return telemVars;
}

// Helpers
Napi::Value iRacingSdkNode::_napi_getTelemetryTypes(const Napi::CallbackInfo &info)
{
  auto env = info.Env();
  auto result = Napi::Object::New(env);
  result.Set(MOCK_PROP_NAME, true);
  return result;
}

// ---------------------------
// Helper functions
// ---------------------------
bool iRacingSdkNode::GetTelemetryBool(int entry, int index)
{
  return false;
}

int iRacingSdkNode::GetTelemetryInt(int entry, int index)
{
  return 0;
}

float iRacingSdkNode::GetTelemetryFloat(int entry, int index)
{
  return 0.0f;
}

double iRacingSdkNode::GetTelemetryDouble(int entry, int index)
{
  // Each double is 8 bytes
  return 0.0;
}

Napi::Object iRacingSdkNode::GetTelemetryVarByIndex(const Napi::Env env, int index)
{
  auto telemVar = Napi::Object::New(env);
  telemVar.Set(MOCK_PROP_NAME, true);
  return telemVar;
}

Napi::Object iRacingSdkNode::GetTelemetryVar(const Napi::Env env, const char *varName)
{
  auto obj = Napi::Object::New(env);
  obj.Set(MOCK_PROP_NAME, true);
  return obj;
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
  iRacingSdkNode::Init(env, exports);

  exports.Set("mockedSdk", true);

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll);
