---
'irsdk-node': major
'@irsdk-node/native': major
'@irsdk-node/types': major
---

- BREAKING: Splits irsdk-node package into multiple packages.
- `@irsdk-node/native` module made into optional module.
- `@irsdk-node/types` module added for consuming iRacing types without importing native module.
- BREAKING: SDK now imported asyncronously, so you need to wait for that to complete before using the SDK. (`await sdk.ready()` method added)
- BREAKING: `.isSimRunning()` static method updated to match naming conventions (now `.IsSimRunning()`)
