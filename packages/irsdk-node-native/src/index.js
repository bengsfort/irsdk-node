// Import from JS so that we can type the API in a nicer way (without aliases)
// The alternative would be to somehow get types generated, or use aliases to
// fake a module and then define that module... but those are gross, so no thanks
export const NativeSDK = require("../build/Release/irsdk_node.node").iRacingSdkNode;
export const DebugSDK = require("../build/Debug/irsdk_node.node").iRacingSdkNode;
