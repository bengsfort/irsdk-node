#ifndef IRSDK_NODE_H
#define IRSDK_NODE_H

#include "./logger.h"
#include <napi.h>

static const int K_DEFAULT_TIMEOUT_MS = 16;

class iRacingSdkNode : public Napi::ObjectWrap<iRacingSdkNode>
{
public:
    static Napi::Object Init(Napi::Env aEnv, Napi::Object aExports);
    iRacingSdkNode(const Napi::CallbackInfo& aInfo);

    // Main API ---------------------------------------------------------------

    /// @brief Returns true if the SDK is currently active and connected to a
    /// session, ie, the data buffer is not null and the SDK returns connected.
    /// This means that the user is actively in an iRacing session.
    ///
    /// @return If there is an active connection to the SDK.
    bool isConnected() const;

    /// @brief Triggers closing the SDK memory file, also resetting any cached
    /// internal instance data.
    void shutdown();

    /// @brief Initializes the SDK, attempting to open the memory file containing
    /// the SDK data. This occurs implicitly during the main data processing loop.
    ///
    /// @return True if the SDK memory file was opened successfully.
    bool startup();

    /// @brief Main SDK data fetching loop tick. Will sleep for the given timeout
    /// if no data is available, then attempt to pull data again.
    ///
    /// @param aTimeoutMs The amount of time to wait, in MS.
    /// @return True if data is ready and available, false if not.
    bool waitForData(int aTimeoutMs = K_DEFAULT_TIMEOUT_MS);

    /// @brief If connected, will return the entire session session string.
    /// @return The YAML session string, in full.
    const char* getSessionStr();

    // Helper utils -----------------------------------------------------------

    /// @brief Gets the current session info version number directly from the SDK.
    /// This value increments every time the session info string changes.
    ///
    /// (see irsdk_getSessionInfoStrUpdate() in irsdk_defines.h)
    ///
    /// @return The current session info version.
    inline int getSessionInfoStrCount();

    /// @brief Checks the current SDK session info string version vs. this
    /// class instances session info string version.
    ///
    /// @return True if the session info string versions do not match.
    inline bool wasSessionStrUpdated();

private:
    // Properties
    Napi::Value _napi_prop_getCurrSessionDataVer(const Napi::CallbackInfo& aInfo);
    /** @deprecated in favor of iRacingSdkNode::_napi_prop_getLogLevel */
    Napi::Value _napi_prop_getEnableLogging(const Napi::CallbackInfo& aInfo);
    /** @deprecated in favor of iRacingSdkNode::_napi_prop_setLogLevel */
    void _napi_prop_setEnableLogging(const Napi::CallbackInfo& aInfo, const Napi::Value& aValue);
    Napi::Value _napi_prop_getLogLevel(const Napi::CallbackInfo& aInfo);
    void _napi_prop_setLogLevel(const Napi::CallbackInfo& aInfo, const Napi::Value& aValue);
    Napi::Value _napi_prop_getIsMocked(const Napi::CallbackInfo& aInfo);

    // Methods
    // Control
    Napi::Value _napi_startSdk(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_stopSdk(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_waitForData(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_broadcastMessage(const Napi::CallbackInfo& aInfo);
    // Getters
    Napi::Value _napi_isRunning(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_getSessionVersionNum(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_getSessionConnectionID(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_getSessionData(const Napi::CallbackInfo& aInfo);
    Napi::Value _napi_getTelemetryData(const Napi::CallbackInfo& aInfo);
    // Helpers
    Napi::Value _napi_getTelemetryTypes(const Napi::CallbackInfo& aInfo);
    Napi::Value GetTelemetryVar(const Napi::CallbackInfo& aInfo);

    bool GetTelemetryBool(int entry, int index);
    int GetTelemetryInt(int entry, int index);
    float GetTelemetryFloat(int entry, int index);
    double GetTelemetryDouble(int entry, int index);
    Napi::Object GetTelemetryVarByIndex(const Napi::Env env, int index);
    Napi::Object GetTelemetryVar(const Napi::Env env, const char* varName);

    /// @brief Resets the current session data / session data status count.
    void _resetData();

    char* _data;
    int _bufLineLen;
    int _sessionStatusID;
    int _lastSessionCt;
    const char* _sessionData;
    irsdk_node::Logger _logger;
};

#endif
