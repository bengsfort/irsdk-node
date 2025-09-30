{
  "targets": [
    {
      "target_name": "irsdk_node",
      "sources": [
          "lib/yaml_parser.cpp",
      ],
      "conditions": [
        ["OS=='win'", {
          "sources": [
            "lib/irsdk_node.cc",
            "lib/irsdk_utils.cpp",
            "lib/irsdk_defines.h"
          ]
        }],
        ["OS!='win'", {
          "sources": ["lib/irsdk_node_mocked.cc"]
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
