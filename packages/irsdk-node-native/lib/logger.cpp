
#include "./logger.h"

#include <cstdarg>
#include <cstdio>
#include <string>

using namespace irsdk_node;



static void forwardArgs(const char *aFormat, ...)
{
	va_list args;
	va_start(args, aFormat);
	vprintf(aFormat, args);
	va_end(args);
}

static std::string makeFormatStr(LogLevel aLevel, const char *aFormat)
{
	std::string str;

	str += "(irsdk-node)(";
	str += Logger::GetLabelForLevel(aLevel);
	str += ") ";
	str += aFormat;

	return str;
}

void Logger::info(const char *aFormat, ...) const
{
	if (this->logLevel < LogLevel_Info) return;

	auto formatStr = makeFormatStr(LogLevel_Info, aFormat);

	va_list args;
	va_start(args, aFormat);
	vprintf(formatStr.c_str(), args);
	va_end(args);
}

void Logger::warn(const char *aFormat, ...) const
{
	if (this->logLevel < LogLevel_Warn) return;

	auto formatStr = makeFormatStr(LogLevel_Warn, aFormat);

	va_list args;
	va_start(args, aFormat);
	vprintf(formatStr.c_str(), args);
	va_end(args);
}

void Logger::error(const char *aFormat, ...) const
{
	if (this->logLevel < LogLevel_Error) return;

	auto formatStr = makeFormatStr(LogLevel_Error, aFormat);

	va_list args;
	va_start(args, aFormat);
	vprintf(formatStr.c_str(), args);
	va_end(args);
}

void Logger::debug(const char *aFormat, ...) const
{
	if (this->logLevel < LogLevel_Debug) return;

	auto formatStr = makeFormatStr(LogLevel_Debug, aFormat);

	va_list args;
	va_start(args, aFormat);
	vprintf(formatStr.c_str(), args);
	va_end(args);
}
