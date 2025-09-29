{
  "targets": [
    {
      "target_name": "irsdk_node",
      "sources": [
        "lib/irsdk_utils.cpp",
        "lib/yaml_parser.cpp",
        "lib/irsdk_defines.h"
      ],
      "conditions": [
        ["OS=='win'", {
          "sources": ["lib/irsdk_node.cc"]
        }],
        ["OS!='win'", {
          "sources": ["lib/irsdk_node_mock.cc"]
        }]
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
