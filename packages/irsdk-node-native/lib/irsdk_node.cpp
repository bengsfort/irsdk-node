#include "./irsdk_defines.h"
#include "./irsdk_node.h"
#include "./logger.h"
#include <cstdio>
#include <napi.h>
#include <napi-inl.h>

// ---------------------------
// Constructors
// ---------------------------
Napi::Object iRacingSdkNode::Init(Napi::Env env, Napi::Object exports)
{
	Napi::Function func = DefineClass(env, "iRacingSdkNode", {
		// Properties													  
		InstanceAccessor<&iRacingSdkNode::_napi_prop_getCurrSessionDataVer>("currDataVersion"),
		InstanceAccessor<&iRacingSdkNode::_napi_prop_getEnableLogging, &iRacingSdkNode::_napi_prop_setEnableLogging>("enableLogging"),
		InstanceAccessor<&iRacingSdkNode::_napi_prop_getLogLevel, &iRacingSdkNode::_napi_prop_setLogLevel>("logLevel"),
		InstanceAccessor<&iRacingSdkNode::_napi_prop_getIsMocked>("isMocked"),

		// Methods
		// Control
		InstanceMethod("startSDK", &iRacingSdkNode::_napi_startSdk),
		InstanceMethod("stopSDK", &iRacingSdkNode::_napi_stopSdk),
		InstanceMethod("waitForData", &iRacingSdkNode::_napi_waitForData),
		InstanceMethod("broadcast", &iRacingSdkNode::_napi_broadcastMessage),
		// Getters
		InstanceMethod("isRunning", &iRacingSdkNode::_napi_isRunning),
		InstanceMethod("getSessionVersionNum", &iRacingSdkNode::_napi_getSessionVersionNum),
		InstanceMethod("getSessionConnectionID", &iRacingSdkNode::_napi_getSessionConnectionID),
		InstanceMethod("getSessionData", &iRacingSdkNode::_napi_getSessionData),
		InstanceMethod("getTelemetryData", &iRacingSdkNode::_napi_getTelemetryData),
		InstanceMethod("getTelemetryVariable", &iRacingSdkNode::GetTelemetryVar),
		// Helpers
		InstanceMethod("__getTelemetryTypes", &iRacingSdkNode::_napi_getTelemetryTypes)
									  });

	Napi::FunctionReference *constructor = new Napi::FunctionReference();
	*constructor = Napi::Persistent(func);
	env.SetInstanceData(constructor);

	exports.Set("iRacingSdkNode", func);
	return exports;
}

iRacingSdkNode::iRacingSdkNode(const Napi::CallbackInfo &info)
	: Napi::ObjectWrap<iRacingSdkNode>(info),
	_data(NULL),
	_bufLineLen(0),
	_sessionStatusID(0),
	_lastSessionCt(-1),
	_sessionData(NULL),
	_logger(irsdk_node::LogLevel_None)
{
	printf("Initializing iRacingSdkNode\n");
}

// Internal implementation ----------------------------------------------------

// Public API
// -----------

bool iRacingSdkNode::startup()
{
	_logger.debug("StartSdk: Attempting to connect to SDK");

	if (!irsdk_isConnected())
	{
		_logger.debug("iRacing SDK not connected, connecting\n");
		bool result = irsdk_startup();
		_logger.info("Attempted SDK startup (result: %i)\n", result);

		return result;
	}

	return true;
}

void iRacingSdkNode::shutdown()
{
	_logger.info("Running irsdk-node shutdown");
	irsdk_shutdown();
	_resetData();
}

bool iRacingSdkNode::isConnected() const
{
	return _data != NULL && irsdk_isConnected();
}


bool iRacingSdkNode::waitForData(int aTimeoutMs)
{
	// Wait for new data or for a session to start
	if (irsdk_waitForDataReady(aTimeoutMs, _data) && irsdk_getHeader())
	{
		_logger.debug("Got data from iRacing SDK\n");
		const irsdk_header *header = irsdk_getHeader();

		// New connection or data changed length
		if (!_data || _bufLineLen != header->bufLen)
		{
			_logger.debug("Connection started / data changed length\n");

			// Reset memory to hold incoming data
			if (_data) delete[] _data;
			_bufLineLen = header->bufLen;
			_data = new char[_bufLineLen];

			// Increment connection and reset info string and buffer length
			_sessionStatusID++;
			_lastSessionCt = -1;

			// Try to fill in the new data
			if (irsdk_getNewData(_data))
			{
				_logger.debug("New data retrieved successfully\n");
				return true;
			}
		} else if (_data)
		{
			_logger.debug("Data already available, ready for processing\n");
			return true;
		}
	} else if (!isConnected())
	{
		_logger.debug("Session ended. Cleaning up.\n");
		_resetData();
	}

	_logger.debug("No data available.\n");
	return false;
}


const char *iRacingSdkNode::getSessionStr()
{
	if (!isConnected())
		return NULL;

	// If there is no session data cached or the session string is out of date,
	// fetch the latest and update the cached session count.
	if (!_sessionData || wasSessionStrUpdated())
	{
		_logger.debug("Invalid session data, fetching latest\n");

		int latestUpdate = getSessionInfoStrCount();
		_logger.info("Session data has been updated (prev: %d, new: %d)\n", _lastSessionCt, latestUpdate);

		_lastSessionCt = latestUpdate;
		_sessionData = irsdk_getSessionInfoStr();
	} else
	{
		_logger.debug("Session data is valid, re-using cached\n");
	}

	return _sessionData;
}

// Private API
// -------------

void iRacingSdkNode::_resetData()
{
	_logger.debug("Resetting cached data...\n");

	if (_data) delete[] _data;
	_data = NULL;
	_sessionData = NULL;
	_lastSessionCt = -1;

	_logger.info("Finished resetting cached data\n");
}

// Node API -------------------------------------------------------------------

// Property implementations
// -------------------------

Napi::Value iRacingSdkNode::_napi_prop_getCurrSessionDataVer(const Napi::CallbackInfo &info)
{
	return Napi::Number::New(info.Env(), this->_lastSessionCt);
}

Napi::Value iRacingSdkNode::_napi_prop_getEnableLogging(const Napi::CallbackInfo &info)
{
	bool enabled = this->_logger.logLevel > irsdk_node::LogLevel_None;
	return Napi::Boolean::New(info.Env(), enabled);
}

void iRacingSdkNode::_napi_prop_setEnableLogging(const Napi::CallbackInfo &info, const Napi::Value &value)
{
	Napi::Boolean enable;
	if (!value.IsBoolean())
	{
		enable = Napi::Boolean::New(info.Env(), false);
	} else
	{
		enable = value.As<Napi::Boolean>();
	}

	this->_logger.logLevel = enable ? irsdk_node::LogLevel_Error : irsdk_node::LogLevel_None;
	this->_logger.warn("DEPRECATION WARNING: .enableLogging is deprecated, please use .logLevel instead\n");
}

Napi::Value iRacingSdkNode::_napi_prop_getLogLevel(const Napi::CallbackInfo &info)
{
	return Napi::Number::New(info.Env(), this->_logger.logLevel);
}

void iRacingSdkNode::_napi_prop_setLogLevel(const Napi::CallbackInfo &info, const Napi::Value &value)
{
	if (!value.IsNumber())
	{
		this->_logger.warn(".logLevel must be given a number (or the LogLevel enum)\n");
		return;
	}

	irsdk_node::LogLevel level = static_cast<irsdk_node::LogLevel>(value.As<Napi::Number>().Int32Value());
	if (level < irsdk_node::LogLevel_None || level > irsdk_node::LogLevel_Debug)
	{
		this->_logger.warn("logLevel given an invalid value\n");
		return;
	}

	this->_logger.logLevel = level;
	this->_logger.info("Log level changed to %s\n", irsdk_node::Logger::GetLabelForLevel(level));
}

Napi::Value iRacingSdkNode::_napi_prop_getIsMocked(const Napi::CallbackInfo &info)
{
	return Napi::Boolean::New(info.Env(), false);
}


// Instance implementations
// ---------------------------

// SDK Control
Napi::Value iRacingSdkNode::_napi_startSdk(const Napi::CallbackInfo &info)
{
	return Napi::Boolean::New(info.Env(), startup());
}

Napi::Value iRacingSdkNode::_napi_stopSdk(const Napi::CallbackInfo &info)
{
	shutdown();
	return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::_napi_waitForData(const Napi::CallbackInfo &info)
{
	Napi::Number timeout = info.Length() <= 0 || !info[0].IsNumber()
		? Napi::Number::New(info.Env(), K_DEFAULT_TIMEOUT_MS)
		: info[0].As<Napi::Number>();

	return Napi::Boolean::New(info.Env(), waitForData(timeout.Int32Value()));
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

	Napi::Number msgEnumIndex = info[0].As<Napi::Number>();
	irsdk_BroadcastMsg msgType = static_cast<irsdk_BroadcastMsg>(msgEnumIndex.Int32Value());

	// Args
	Napi::Number arg1 = info[1].As<Napi::Number>();
	Napi::Number arg2 = info[2].As<Napi::Number>();
	Napi::Number arg3 = info[3].As<Napi::Number>();

	irsdk_ChatCommandMode chatCommand = irsdk_ChatCommand_Cancel;


	// Handle each message independently.
	// 
	// This could be consolidated, but then it becomes way too difficult to easily
	// grep what each messages expected API is, as some are not necessarily what 
	switch (msgType)
	{
		// BroadcastCamSwitchPos: car position, group, camera
		// BroadcastCamSwitchNum: driver #, group, camera
	case irsdk_BroadcastCamSwitchPos:
	case irsdk_BroadcastCamSwitchNum:
		// First arg can be irsdk_csMode enum.
		// Any value above -1 equates to focusing on a specific driver.
		irsdk_broadcastMsg(msgType, arg1.Int32Value(), arg2.Int32Value(), arg3.Int32Value());
		break;

	// irsdk_CameraState, unused, unused 
	case irsdk_BroadcastCamSetState:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_CameraState>(arg1.Int32Value()), 0);
		break;

	// speed, slowMotion, unused
	case irsdk_BroadcastReplaySetPlaySpeed:
		// Speed (arg1) should be multiples of 2 (0, 1, 2, 4, 8, 16), can be negative
		// Slow mo (arg2) should be 1 | 0
		irsdk_broadcastMsg(msgType, arg1.Int32Value(), arg2.ToBoolean().Value());
		break;

	// irsdk_RpyPosMode, Frame Number (high, low)
	case irsdk_BroadcastReplaySetPlayPosition:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_RpyPosMode>(arg1.Int32Value()), arg2.Int32Value());
		break;

	// irsdk_RpySrchMode, unused, unused
	case irsdk_BroadcastReplaySearch:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_RpySrchMode>(arg1.Int32Value()), 0, 0);
		break;

	// irsdk_RpyStateMode, unused, unused
	case irsdk_BroadcastReplaySetState:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_RpyStateMode>(arg1.Int32Value()), 0);
		break;

	// irsdk_ReloadTexturesMode, carIdx, unused
	case irsdk_BroadcastReloadTextures:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_ReloadTexturesMode>(arg1.Int32Value()), arg2.Int32Value(), 0);
		break;

	// irsdk_ChatCommandMode, subCommand, unused
	case irsdk_BroadcastChatComand:
		chatCommand = static_cast<irsdk_ChatCommandMode>(arg1.Int32Value());
		if (chatCommand != irsdk_ChatCommand_Macro)
		{
			irsdk_broadcastMsg(msgType, chatCommand, 0);
			break;
		}

		// If the chat command is to use a macro, parse the macro id (1 - 15) (2nd arg)
		irsdk_broadcastMsg(msgType, chatCommand, arg2.Int32Value(), 0);
		break;

	// irsdk_PitCommandMode, parameter
	case irsdk_BroadcastPitCommand:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_PitCommandMode>(arg1.Int32Value()), arg2.Int32Value());
		break;

	// irsdk_TelemCommandMode, unused, unused
	case irsdk_BroadcastTelemCommand:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_TelemCommandMode>(arg1.Int32Value()), 0, 0);
		break;

	// irsdk_FFBCommandMode, value (float, high, low)
	case irsdk_BroadcastFFBCommand:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_FFBCommandMode>(arg1.Int32Value()), arg2.FloatValue());
		break;

	// This does a search and not a direct jump, so it may take a while
	// sessionNum, sessionTimeMS (high, low)
	case irsdk_BroadcastReplaySearchSessionTime:
		irsdk_broadcastMsg(msgType, arg1.Int32Value(), arg2.Int32Value());
		break;

	// irsdk_VideoCaptureMode, unused, unused
	case irsdk_BroadcastVideoCapture:
		irsdk_broadcastMsg(msgType, static_cast<irsdk_VideoCaptureMode>(arg1.Int32Value()), 0);
		break;

	// Unused + out-of-bounds
	default:
		this->_logger.error("Attempted to broadcast an unsupported message.\n");
		return Napi::Boolean::New(env, false);
	}

	return Napi::Boolean::New(env, true);
}

// SDK State Getters
Napi::Value iRacingSdkNode::_napi_isRunning(const Napi::CallbackInfo &info)
{
	return Napi::Boolean::New(info.Env(), isConnected());
}

Napi::Value iRacingSdkNode::_napi_getSessionVersionNum(const Napi::CallbackInfo &info)
{
	return Napi::Number::New(info.Env(), getSessionInfoStrCount());
}

Napi::Value iRacingSdkNode::_napi_getSessionConnectionID(const Napi::CallbackInfo &info)
{
	return Napi::Number::New(info.Env(), this->_sessionStatusID);
}

Napi::Value iRacingSdkNode::_napi_getSessionData(const Napi::CallbackInfo &info)
{
	auto session = getSessionStr();

	if (session == NULL)
		return Napi::String::New(info.Env(), "");

	return Napi::String::New(info.Env(), session);
}

Napi::Value iRacingSdkNode::GetTelemetryVar(const Napi::CallbackInfo &info)
{
	Napi::Env env = info.Env();

	int varIndex;
	if (info.Length() <= 0)
	{
		varIndex = 0;
	} else if (!info[0].IsNumber())
	{
		if (info[0].IsString())
		{
			const char *name = info[0].As<Napi::String>().Utf8Value().c_str();
			return this->GetTelemetryVar(env, name);
		}
		varIndex = 0;
	}

	return this->GetTelemetryVarByIndex(env, varIndex);
}

Napi::Value iRacingSdkNode::_napi_getTelemetryData(const Napi::CallbackInfo &info)
{
	const irsdk_header *header = irsdk_getHeader();
	auto env = info.Env();
	auto telemVars = Napi::Object::New(env);

	int count = header->numVars;
	for (int i = 0; i < count; i++)
	{
		auto telemVariable = this->GetTelemetryVarByIndex(env, i);
		if (telemVariable.IsObject() && telemVariable.Has("name"))
		{
			telemVars.Set(telemVariable.Get("name"), telemVariable);
		}
	}

	return telemVars;
}

// Helpers
Napi::Value iRacingSdkNode::_napi_getTelemetryTypes(const Napi::CallbackInfo &info)
{
	auto env = info.Env();
	auto result = Napi::Object::New(env);

	const int count = irsdk_getHeader()->numVars;
	const irsdk_varHeader *varHeader;
	for (int i = 0; i < count; i++)
	{
		varHeader = irsdk_getVarHeaderEntry(i);
		result.Set(varHeader->name, Napi::Number::New(env, varHeader->type));
	}

	return result;
}

// ---------------------------
// Helper functions
// ---------------------------
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

Napi::Object iRacingSdkNode::GetTelemetryVarByIndex(const Napi::Env env, int index)
{
	auto headerVar = irsdk_getVarHeaderEntry(index);
	auto telemVar = Napi::Object::New(env);

	// Create entry object
	telemVar.Set("countAsTime", headerVar->countAsTime);
	telemVar.Set("length", headerVar->count);
	telemVar.Set("name", headerVar->name);
	telemVar.Set("description", headerVar->desc);
	telemVar.Set("unit", headerVar->unit);
	telemVar.Set("varType", headerVar->type);

	int dataSize = headerVar->count * irsdk_VarTypeBytes[headerVar->type];
	auto entryVal = Napi::ArrayBuffer::New(env, dataSize);
	memcpy(entryVal.Data(), this->_data + headerVar->offset, dataSize);

	telemVar.Set("value", entryVal);
	return telemVar;
}

Napi::Object iRacingSdkNode::GetTelemetryVar(const Napi::Env env, const char *varName)
{
	int varIndex = irsdk_varNameToIndex(varName);
	return this->GetTelemetryVarByIndex(env, varIndex);
}

// ---------------------------
// Addon init
// TODO: This should be standardized/shared across the mocked/unmocked modules.
// ---------------------------
Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
	iRacingSdkNode::Init(env, exports);

	exports.Set("mockedSdk", false);

	return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll);
