---
"@irsdk-node/native": minor
"irsdk-node": minor
---

Add leveled logging support. Native and TS API's now expose a LogLevel API that can be used to control SDK logging output more granularly, allowing filtering logs between debug, error, warn, info, and silent.

.enableLogging is now deprecated, but remains a part of the API and uses the new API underneath. It is recommended to migrate to the .logLevel prop (or use the new config object passed to the irsdk-node constructor) instead.
