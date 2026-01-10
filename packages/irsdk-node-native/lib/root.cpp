#include "./irsdk_node.h"
#include <napi.h>

Napi::Object registerBindings(Napi::Env aEnv, Napi::Object aExports)
{
	iRacingSdkNode::Init(aEnv, aExports);

	return aExports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, registerBindings);
