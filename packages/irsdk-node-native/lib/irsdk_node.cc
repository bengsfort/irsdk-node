#include "./irsdk_defines.h"
#include "./irsdk_node.h"

// ---------------------------
// Constructors
// ---------------------------
Napi::Object iRacingSdkNode::Init(Napi::Env env, Napi::Object exports)
{
	Napi::Function func = DefineClass(env, "iRacingSdkNode", {
		// Properties													  
		InstanceAccessor<&iRacingSdkNode::GetCurrSessionDataVersion>("currDataVersion"),
		InstanceAccessor<&iRacingSdkNode::GetEnableLogging, &iRacingSdkNode::SetEnableLogging>("enableLogging"),
		InstanceAccessor<&iRacingSdkNode::GetIsMocked>("isMocked"),

		// Methods
		// Control
		InstanceMethod<&iRacingSdkNode::StartSdk>("startSDK"),
		InstanceMethod("stopSDK", &iRacingSdkNode::StopSdk),
		InstanceMethod("waitForData", &iRacingSdkNode::WaitForData),
		InstanceMethod("broadcast", &iRacingSdkNode::BroadcastMessage),
		// Getters
		InstanceMethod("isRunning", &iRacingSdkNode::IsRunning),
		InstanceMethod("getSessionVersionNum", &iRacingSdkNode::GetSessionVersionNum),
		InstanceMethod("getSessionData", &iRacingSdkNode::GetSessionData),
		InstanceMethod("getTelemetryData", &iRacingSdkNode::GetTelemetryData),
		InstanceMethod("getTelemetryVariable", &iRacingSdkNode::GetTelemetryVar),
		// Helpers
		InstanceMethod("__getTelemetryTypes", &iRacingSdkNode::__GetTelemetryTypes)});

	Napi::FunctionReference *constructor = new Napi::FunctionReference();
	*constructor = Napi::Persistent(func);
	env.SetInstanceData(constructor);

	exports.Set("iRacingSdkNode", func);
	return exports;
}

iRacingSdkNode::iRacingSdkNode(const Napi::CallbackInfo &info)
	: Napi::ObjectWrap<iRacingSdkNode>(info), _data(NULL), _bufLineLen(0), _sessionStatusID(0), _lastSessionCt(-1), _sessionData(NULL), _loggingEnabled(false)
{
	printf("Initializing iRacingSdkNode\n");
}

// ---------------------------
// Property implementations
// ---------------------------
Napi::Value iRacingSdkNode::GetCurrSessionDataVersion(const Napi::CallbackInfo &info)
{
	int ver = this->_lastSessionCt;
	return Napi::Number::New(info.Env(), ver);
}

Napi::Value iRacingSdkNode::GetEnableLogging(const Napi::CallbackInfo &info)
{
	bool enabled = this->_loggingEnabled;
	return Napi::Boolean::New(info.Env(), enabled);
}

void iRacingSdkNode::SetEnableLogging(const Napi::CallbackInfo &info, const Napi::Value &value)
{
	Napi::Boolean enable;
	if (info.Length() <= 0 || !info[0].IsBoolean())
	{
		enable = Napi::Boolean::New(info.Env(), false);
	} else
	{
		enable = info[0].As<Napi::Boolean>();
	}
	this->_loggingEnabled = enable;
	if (this->_loggingEnabled)
		printf("iRacingSDK Logging enabled\n");
}

Napi::Value iRacingSdkNode::GetIsMocked(const Napi::CallbackInfo &info)
{
	return Napi::Boolean::New(info.Env(), false);
}

// ---------------------------
// Instance implementations
// ---------------------------
// SDK Control
Napi::Value iRacingSdkNode::StartSdk(const Napi::CallbackInfo &info)
{
	if (this->_loggingEnabled)
		printf("Starting SDK...\n");

	if (!irsdk_isConnected())
	{
		bool result = irsdk_startup();
		if (this->_loggingEnabled)
			printf("Connected to iRacing SDK (%i)\n", result);
		return Napi::Boolean::New(info.Env(), result);
	}
	return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::StopSdk(const Napi::CallbackInfo &info)
{
	irsdk_shutdown();
	return Napi::Boolean::New(info.Env(), true);
}

Napi::Value iRacingSdkNode::WaitForData(const Napi::CallbackInfo &info)
{
  // Figure out the time to wait
  // This will default to the timeout set on the class
	Napi::Number timeout;
	if (info.Length() <= 0 || !info[0].IsNumber())
	{
		timeout = Napi::Number::New(info.Env(), 16);
	} else
	{
		timeout = info[0].As<Napi::Number>();
	}

	if (!irsdk_isConnected() && !irsdk_startup())
	{
		return Napi::Boolean::New(info.Env(), false);
	}

	// @todo: try to do this async instead
	const irsdk_header *header = irsdk_getHeader();

	// @todo: This isn't the best way of doing this. Need to improve, but this works for now
	if (!this->_data)
	{
		this->_data = new char[header->bufLen];
	}

	// wait for start of sesh or new data
	bool dataReady = irsdk_waitForDataReady(timeout, this->_data);
	if (dataReady && header)
	{
		if (this->_loggingEnabled)
			("Session started or we have new data.\n");

		  // New connection or data changed length
		if (this->_bufLineLen != header->bufLen)
		{
			if (this->_loggingEnabled)
				printf("Connection started / data changed length.\n");

			this->_bufLineLen = header->bufLen;

			// Increment connection
			this->_sessionStatusID++;

			// Reset info str status
			this->_lastSessionCt = -1;
			return Napi::Boolean::New(info.Env(), true);
		} else if (this->_data)
		{
			if (this->_loggingEnabled)
				printf("Data initialized and ready to process.\n");
			  // already initialized and ready to process
			return Napi::Boolean::New(info.Env(), true);
		}
	} else if (!(this->_data != NULL && irsdk_isConnected()))
	{
		if (this->_loggingEnabled)
			printf("Session ended. Cleaning up.\n");
		  // Session ended
		if (this->_data)
			delete[] this->_data;
		this->_data = NULL;

		// Reset Info str
		this->_lastSessionCt = -1;
	}
	if (this->_loggingEnabled)
		printf("Session ended or something went wrong. Not successful.\n");
	return Napi::Boolean::New(info.Env(), false);
}

Napi::Value iRacingSdkNode::BroadcastMessage(const Napi::CallbackInfo &info)
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
			if (this->_loggingEnabled)
				printf("Attempted to broadcast an unsupported message.\n");
			return Napi::Boolean::New(env, false);
	}

	return Napi::Boolean::New(env, true);
}

// SDK State Getters
Napi::Value iRacingSdkNode::IsRunning(const Napi::CallbackInfo &info)
{
	bool result = irsdk_isConnected();
	return Napi::Boolean::New(info.Env(), result);
}

Napi::Value iRacingSdkNode::GetSessionVersionNum(const Napi::CallbackInfo &info)
{
	int sessVer = irsdk_getSessionInfoStrUpdate();
	return Napi::Number::New(info.Env(), sessVer);
}

Napi::Value iRacingSdkNode::GetSessionData(const Napi::CallbackInfo &info)
{
	int latestUpdate = irsdk_getSessionInfoStrUpdate();
	if (this->_lastSessionCt != latestUpdate)
	{
		if (this->_loggingEnabled)
			printf("Session data has been updated (prev: %d, new: %d)\n", this->_lastSessionCt, latestUpdate);
		this->_lastSessionCt = latestUpdate;
		this->_sessionData = irsdk_getSessionInfoStr();
	}
	const char *session = this->_sessionData;
	if (session == NULL)
	{
		return Napi::String::New(info.Env(), "");
	}
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

Napi::Value iRacingSdkNode::GetTelemetryData(const Napi::CallbackInfo &info)
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
Napi::Value iRacingSdkNode::__GetTelemetryTypes(const Napi::CallbackInfo &info)
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
