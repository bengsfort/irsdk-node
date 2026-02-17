Defined in: [defines.ts:554](https://github.com/bengsfort/irsdk-node/blob/ed605e3e870d97f50850c55eb0b50a1bc8e88cac/packages/irsdk-node-types/src/defines.ts#L554)

Available telemetry command modes, to be used with message broadcasting.
This can be called at any time, but telemetry only records when driver is in
the car.
Represents `irsdk_TelemCommandMode`

## Enumeration Members

### Restart

> **Restart**: `2`

Defined in: [defines.ts:560](https://github.com/bengsfort/irsdk-node/blob/ed605e3e870d97f50850c55eb0b50a1bc8e88cac/packages/irsdk-node-types/src/defines.ts#L560)

Write current file to disk and start a new one

***

### Start

> **Start**: `1`

Defined in: [defines.ts:558](https://github.com/bengsfort/irsdk-node/blob/ed605e3e870d97f50850c55eb0b50a1bc8e88cac/packages/irsdk-node-types/src/defines.ts#L558)

Turn telemetry recording on

***

### Stop

> **Stop**: `0`

Defined in: [defines.ts:556](https://github.com/bengsfort/irsdk-node/blob/ed605e3e870d97f50850c55eb0b50a1bc8e88cac/packages/irsdk-node-types/src/defines.ts#L556)

Turn telemetry recording off
