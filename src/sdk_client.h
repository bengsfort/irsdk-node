#ifndef IRSDK_ADDON_CLIENT_H
#define IRSDK_ADDON_CLIENT_H

#include <nan.h>
#include "../lib/irsdk_defines.h"

namespace irsdk {

class SdkClient
{
public:
    explicit SdkClient();
    ~SdkClient();

    // Initialization
    bool StartSDK();
    void StopSDK();

    // State
    bool IsRunning();
    bool WaitForData(int timeout = 16);

    const char* GetSessionData();
    // @todo: Would it be possible to store ALL in an arr that gets created
    // When we get data? Does the number of vars change? 
    TelemetryEntry GetTelemetryData(int index);

    // Mirror for broadcasting
    void BroadcastMsg(irsdk_BroadcastMsg msg, int var1, int var2);
    void BroadcastMsg(irsdk_BroadcastMsg msg, int var1, float var2);
    void BroadcastMsg(irsdk_BroadcastMsg msg, int var1, int var2, int var3);
protected:
    bool m_Initialized;
    char *m_Data;
    int m_BufLineLen;
    int m_SessionStatusID;
    int m_LastSessionCount;
};

struct TelemetryEntry
{
    bool isTimeValue;
    int count;
    irsdk_VarType type;
    const char *name;
    const char *description;
    const char *unit;

    int IntValue(int index = 0);
    double DoubleValue(int index = 0);
    float FloatValue(int index = 0);
    bool BoolValue(int index = 0);
};

} // namespace irsdk

#endif
