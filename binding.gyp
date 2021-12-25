{
  "targets": [
    {
      "target_name": "irsdk_node",
      "sources": [
        "src/irsdk_node.cc",
        "lib/irsdk_utils.cpp",
        "lib/yaml_parser.cpp",
        "lib/irsdk_defines.h"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
