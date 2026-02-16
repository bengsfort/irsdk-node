Defined in: [irsdk-node.ts:66](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node/src/irsdk-node.ts#L66)

Configuration options interface that can be passed to the SDK during instantiation.

## Properties

### autoEnableTelemetry?

> `optional` **autoEnableTelemetry**: `boolean`

Defined in: [irsdk-node.ts:86](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node/src/irsdk-node.ts#L86)

Determines if the SDK will send the `enable telemetry` command to iRacing on
initialization.

#### Remarks

See [IRacingSDK.autoEnableTelemetry](../classes/IRacingSDK.md#autoenabletelemetry) for more information.

#### Default Value

`false`

***

### logLevel?

> `optional` **logLevel**: `LogLevel`

Defined in: [irsdk-node.ts:75](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node/src/irsdk-node.ts#L75)

The level of logging to allow the SDK to output.

#### Remarks

See [IRacingSDK.logLevel](../classes/IRacingSDK.md#loglevel) for more info.

#### Default Value

`LogLevel.None`

***

### useTelemVariableCache?

> `optional` **useTelemVariableCache**: `boolean`

Defined in: [irsdk-node.ts:98](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node/src/irsdk-node.ts#L98)

Flags whether to enable the telemetry variable lookup cache when [IRacingSDK.getTelemetryVariable](../classes/IRacingSDK.md#gettelemetryvariable)
 is called with a string. In performance critical applications, this should remain enabled.

#### Remarks

See [IRacingSDK.useTelemVariableCache](../classes/IRacingSDK.md#usetelemvariablecache), [IRacingSDK.getTelemetryVariable](../classes/IRacingSDK.md#gettelemetryvariable),
and [IRacingSDK.resetTelemetryVariableCache](../classes/IRacingSDK.md#resettelemetryvariablecache) for more information.

#### Default Value

`true`
