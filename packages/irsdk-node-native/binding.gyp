{
  "targets": [
    {
      "target_name": "irsdk_node",
      "sources": [
        "lib/root.cpp",
        "lib/logger.cpp",
        "lib/irsdk_node.cpp",
        "lib/irsdk_utils.cpp",
        "lib/irsdk_defines.h"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS",
      ],
      "include_dirs": [
        "<!(node -p \"require('node-addon-api').include_dir\")",
      ]
    }
  ]
}
