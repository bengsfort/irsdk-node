---
"@irsdk-node/native": minor
"irsdk-node": minor
---

The timeout parameter provided to .waitForData now gets clamped to a minimum of 16 (aka 16ms/~60fps). This iRacing SDK only supports pulling data at 60fps or slower, and attempting to pull data out faster than that can cause unwanted functionality where the SDK will rapidly swap between getting data and being disconnected.
