---
"@irsdk-node/native": minor
---

Non-windows platforms no longer have a native mock SDK, but just a typescript mock SDK. This change does not affect the mock SDK usage, and lowers the size of the package due to no longer shipping native binaries for non-windows platforms.
