[Packages](../../../README.md) / [@irsdk-node/types](../README.md) / TelemetryVariable

# Interface: TelemetryVariable\<VarType\>

Defined in: [telemetry.gen.ts:8](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L8)

A variable representing telemetry data from the iRacing SDK.

## Type Parameters

| Type Parameter | theme_default_type |
| ------ | ------ |
| `VarType` | `number`[] |

## Properties

### countAsTime

> **countAsTime**: `boolean`

Defined in: [telemetry.gen.ts:16](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L16)

Should it be treated as a time?

***

### description

> **description**: `string`

Defined in: [telemetry.gen.ts:12](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L12)

The description.

***

### length

> **length**: `number`

Defined in: [telemetry.gen.ts:18](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L18)

The number of values provided.

***

### name

> **name**: `string`

Defined in: [telemetry.gen.ts:10](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L10)

The name of the variable.

***

### unit

> **unit**: `string`

Defined in: [telemetry.gen.ts:14](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L14)

The unit of the value (ex. "kg/m^2")

***

### value

> **value**: `VarType`

Defined in: [telemetry.gen.ts:22](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L22)

The current value of this variable.

***

### varType

> **varType**: `number`

Defined in: [telemetry.gen.ts:20](https://github.com/bengsfort/irsdk-node/blob/9e4ddd3ce228f719c6a1ab94e7bc0aead0533b07/packages/irsdk-node-types/src/telemetry.gen.ts#L20)

The native variable type
