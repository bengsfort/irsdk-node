Defined in: [INativeSDK.ts:17](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L17)

Logging Levels available for configuring the logging output of the native module.
Each level includes the previous, for example `LogLevel.Error` will only log
errors, however `LogLevel.Warn` will log warnings, AND errors.

## Enumeration Members

### Debug

> **Debug**: `4`

Defined in: [INativeSDK.ts:27](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L27)

Log everything. Only use if you are ok with spammy logs!

***

### Error

> **Error**: `1`

Defined in: [INativeSDK.ts:21](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L21)

Log only errors.

***

### Info

> **Info**: `3`

Defined in: [INativeSDK.ts:25](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L25)

Log info, warnings, and errors.

***

### None

> **None**: `0`

Defined in: [INativeSDK.ts:19](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L19)

Log nothing to console.

***

### Warn

> **Warn**: `2`

Defined in: [INativeSDK.ts:23](https://github.com/bengsfort/irsdk-node/blob/3414e3512ef94d855dcb9b1b26e3e21ded3dddfc/packages/irsdk-node-native/src/INativeSDK.ts#L23)

Log warnings and errors.
