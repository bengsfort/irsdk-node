#include "./irsdk_node.h"
#include <napi.h>

Napi::Object registerBindings(Napi::Env aEnv, Napi::Object aExports)
{
    irsdk_node::iRacingSdkNode::Init(aEnv, aExports);

    return aExports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, registerBindings);
