#pragma once

namespace irsdk_node
{
static const char* K_LOGLEVEL_LABEL_INFO = "INFO";
static const char* K_LOGLEVEL_LABEL_WARN = "WARN";
static const char* K_LOGLEVEL_LABEL_ERROR = "ERROR";
static const char* K_LOGLEVEL_LABEL_DEBUG = "DEBUG";
static const char* K_LOGLEVEL_LABEL_NONE = "";

enum LogLevel
{
    LogLevel_None = 0,
    LogLevel_Error,
    LogLevel_Warn,
    LogLevel_Info,
    LogLevel_Debug,
};

class Logger
{
public:
    inline Logger(LogLevel aLogLevel)
        : logLevel(aLogLevel)
    { }

    LogLevel logLevel;

    void info(const char* aFormat, ...) const;
    void warn(const char* aFormat, ...) const;
    void error(const char* aFormat, ...) const;
    void debug(const char* aFormat, ...) const;

    inline static const char* GetLabelForLevel(LogLevel aLevel)
    {
        switch (aLevel) {
        case LogLevel_Error:
            return K_LOGLEVEL_LABEL_ERROR;
        case LogLevel_Warn:
            return K_LOGLEVEL_LABEL_WARN;
        case LogLevel_Info:
            return K_LOGLEVEL_LABEL_INFO;
        case LogLevel_Debug:
            return K_LOGLEVEL_LABEL_DEBUG;
        default:
            return K_LOGLEVEL_LABEL_NONE;
        }

        return K_LOGLEVEL_LABEL_NONE;
    }
};

}
