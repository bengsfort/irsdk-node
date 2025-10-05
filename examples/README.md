# irsdk-node examples

This directory contains example projects of irsdk-node. You can use these as a 
starting point, or just as a reference. In addition to being educational, these
projects exist as test sandboxes to validate that the library works as intended. 
See the [Test Usage](#Test-usage) section for more details.

## Examples

- [node-dump-sdk-data](./node-dump-sdk-data/) - Simple commonjs node.js app that 
dumps the current SDK data to output files. Useful for generating test data.
- [node-sdk-server](./node-sdk-server/) - ESM Node.js server exposing the current 
SDK data via endpoints, as well as a websocket connection for real-time updates.

## Test usage

Each example can be used to test new versions before publishing. To do so:

- Create a package tarball for each library package:

```
# In each package (packages/irsdk-node, packages/irsdk-node-native, etc.)
$ pnpm pack --out path/to/tarball.tar.gz
```

- Add the tarballs as dependencies to the example:

```
# In the example
$ pnpm add ../../packages/irsdk-node/path/to/tarball.tar.gz
```

The example should then run with production packaged versions of the packages,f
ideal for testing.
