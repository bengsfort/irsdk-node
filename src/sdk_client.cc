#include "./sdk_client.h"

namespace irsdk {

SdkClient::SdkClient()
            : m_Data(NULL)
            , m_BufLineLen(0)
            , m_SessionStatusID(0)
            , m_LastSessionCount(-1)
{
    // Temp
    printf("Hello, irsdk::SdkClient!\n");
}
SdkClient::~SdkClient()
{
    // temp
    printf("Bye bye, irsdk::SdkClient!\n");
}

// Control
bool SdkClient::StartSDK()
{
    if (!m_Initialized && !irsdk_isConnected()) {
        bool result = irsdk_startup();
        m_Initialized = result;
        return result;
    }
    return true;
}
void SdkClient::StopSDK()
{
    irsdk_shutdown();
    // Reset everything
    if (m_Data) delete[] m_Data;
    m_Data = NULL;
    m_LastSessionCount = -1;
}

// State
bool SdkClient::IsRunning()
{
    return m_Initialized && m_Data != NULL && irsdk_isConnected();
}

bool SdkClient::WaitForData(int timeout)
{
    if (!m_Initialized && irsdk_isConnected && !irsdk_startup())
        return false;
    
    printf("Attempting to wait for data (timeout: %d)\n", timeout);
    
    // Wait for start of sesh or new data
    bool dataReady = irsdk_waitForDataReady(timeout, m_Data);
    const irsdk_header *header = irsdk_getHeader();
    if (dataReady && header) {
        printf("Session started or we have new data.\n");

        // New connection or data changed length
        if (m_Data || m_BufLineLen != header->bufLen) {
            printf("Connection started / data changed length.\n");

            // Allocate mem
            if (m_Data) delete[] m_Data;
            m_BufLineLen = header->bufLen;
            m_Data = new char[m_BufLineLen];

            // Increment session, reset session info string status
            m_SessionStatusID++;
            m_LastSessionCount = -1;

            // Try to get data...
            bool success = irsdk_getNewData(m_Data);
            if (success) {
                printf("Successfully got new data!");
                return true;
            }
        } else if (m_Data) {
            printf("Session is initialized, data is ready!");
            // We are already initialized, data is ready!
            return true;
        }
    } else if (!IsRunning()) {
        // Session ended
        printf("Session has ended, resetting");
        if (m_Data) delete[] m_Data;
        m_Data = NULL;
        m_LastSessionCount = -1;
    }
    printf("Something went wrong. Not successful.");
    return false;
}


// Data getters
const char *SdkClient::GetSessionData()
{
    if (IsRunning())
    {
        m_LastSessionCount = irsdk_getSessionInfoStrUpdate();
        return irsdk_getSessionInfoStr();
    }
    return NULL;
}
TelemetryEntry SdkClient::GetTelemetryData(int index)
{
    const irsdk_header *header = irsdk_getHeader();
    const irsdk_varHeader *varHeader = irsdk_getVarHeaderEntry(index);
    TelemetryEntry entry = {
        varHeader->countAsTime, // isTimeValue
        varHeader->count, // count
        (irsdk_VarType)varHeader->type, // type
        varHeader->name, // name
        varHeader->desc, // description
        varHeader->unit, // unit
    };


}

// --- TelemetryEntry

int TelemetryEntry::IntValue(int index)
{

}

double TelemetryEntry::DoubleValue(int index)
{

}

float TelemetryEntry::FloatValue(int index)
{

}

bool TelemetryEntry::BoolValue(int index)
{

}

} // namespace irsdk
