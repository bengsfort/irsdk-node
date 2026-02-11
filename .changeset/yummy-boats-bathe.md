---
"@irsdk-node/native": patch
"irsdk-node": patch
---

The `.getTelemetryVariable()` native function now returns `null` if given invalid arguments, and the `INativeSDK` API has been updated to reflect this. `.getTelemetryVariable()` in `irsdk-node` has been updated to early return `null` when this case occurs.
