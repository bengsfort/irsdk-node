{
  "targets": [
    {
      "target_name": "irsdk-node",
      "sources": [ "src/irsdk-node.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
