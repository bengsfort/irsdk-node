{
  "targets": [
    {
      "target_name": "irsdk_node",
      "sources": [ "src/irsdk_node.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
