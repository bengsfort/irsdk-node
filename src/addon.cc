#ifndef IRSDK_ADDON_H
#define IRSDK_ADDON_H

#include <nan.h>
#include "./sdk_client.h"

namespace irsdk {

using v8::Local;
using v8::Object;

void InitAll(Local<Object> exports)
{
    SdkClient::Init(exports);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, InitAll);

}; // namespace irsdk

#endif
