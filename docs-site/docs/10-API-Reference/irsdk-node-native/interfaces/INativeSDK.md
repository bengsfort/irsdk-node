Defined in: [INativeSDK.ts:57](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L57)

Interface of the iRacing SDK native module.

This maps 1:1 to the API implemented within the C++ addon.

## Remarks

This is implemented as a class which can be instantiated in both real environments
and mock environments where the native SDK is not available (Linux, OSX). In
mock environments, some of the data is stubbed but most are no-ops.

The intended flow of using this class is to create an instance, start the SDK,
then create a frame loop to wait for data each frame until you are done and
stop the SDK.

## Example

```ts
const sdk = new NativeSDK();

if (sdk.waitForData()) {
  const lapVar = sdk.getTelemetryVariable("Lap");
} else {
  console.log("No data");
}
```

## Properties

### currDataVersion

> `readonly` **currDataVersion**: `number`

Defined in: [INativeSDK.ts:69](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L69)

The current session data string version. This value increments every time
the session data string changes, and is a reliable way to detect changes.

#### Remarks

This only updates after [INativeSDK.waitForData](#waitfordata) has succeeded and
cached a session data string. To ignore the cache and fetch the latest
data version directly from the iRacing SDK, use [INativeSDK.getSessionVersionNum](#getsessionversionnum)
instead.

***

### ~~enableLogging~~

> **enableLogging**: `boolean`

Defined in: [INativeSDK.ts:84](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L84)

Flag indicating whether to enable logging or not. `true` will set the LogLevel
to `Error`, while `false` will set it to `None`. Do not use.

#### Deprecated

use [INativeSDK.logLevel](#loglevel) instead.

***

### isMocked

> `readonly` **isMocked**: `boolean`

Defined in: [INativeSDK.ts:76](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L76)

Flag indicating if this SDK instance is mocked. This is only true whenever
the SDK is being run on a non-Windows platform where the SDK is not currently
supported.

***

### logLevel

> **logLevel**: [`LogLevel`](../enumerations/LogLevel.md)

Defined in: [INativeSDK.ts:90](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L90)

The currently active logging level.

#### See

[LogLevel](../enumerations/LogLevel.md)

## Methods

### broadcast()

> **broadcast**\<`Command`\>(`message`, ...`args`): `boolean`

Defined in: [INativeSDK.ts:278](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L278)

Broadcast a message to iRacing.

#### Type Parameters

| Type Parameter | theme_default_type |
| ------ | ------ |
| `Command` *extends* keyof `BroadcastArgsMap` | keyof `BroadcastArgsMap` |

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `message` | `Command` | The command to trigger. |
| ...`args` | `BroadcastCommandArgs`\<`Command`\> | The additional args to send. This is type safe when using TypeScript. |

#### Returns

`boolean`

true if the command succeeded.

#### Remarks

This is used to dispatch commands or control certain things in iRacing, and
should only be used after a connection to iRacing has been established.

***

### getSessionConnectionID()

> **getSessionConnectionID**(): `number`

Defined in: [INativeSDK.ts:189](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L189)

Gets the ID of the native SDK's connection to the current iRacing session.

#### Returns

`number`

***

### getSessionData()

> **getSessionData**(): `string`

Defined in: [INativeSDK.ts:157](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L157)

Returns the latest version of the Session Data string as raw YAML. This should
only be called after [INativeSDK.waitForData](#waitfordata) has successfully retrieved
data from iRacing.

#### Returns

`string`

The current session data as YAML, or an empty string if none available.

#### Remarks

This internally caches the session data version and will automatically fetch
and return the latest version if the cached data is out of date. The string
returned from this can be assumed to be the most up to date data.

***

### getSessionVersionNum()

> **getSessionVersionNum**(): `number`

Defined in: [INativeSDK.ts:184](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L184)

Gets the current Session Data version directly from the iRacing SDK, ignoring
the cached [INativeSDK.currDataVersion](#currdataversion) property. This can be used to
detect data updates manually.

#### Returns

`number`

***

### getTelemetryData()

> **getTelemetryData**(): `TelemetryVarList`

Defined in: [INativeSDK.ts:177](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L177)

Returns an object containing the current value of every available telemetry
variable. This should only be called after [INativeSDK.waitForData](#waitfordata)
has successfully retrieved data. Prefer [INativeSDK.getTelemetryVariable](#gettelemetryvariable).

#### Returns

`TelemetryVarList`

An object with every telemetry variable available.

#### Remarks

This walks the entire telemetry data to generate the telemetry data on-demand,
and as such this is a very performance intensive function. Prefer retrieving
only the variables that you need via [INativeSDK.getTelemetryVariable](#gettelemetryvariable)
instead in performance-critical applications.

If you must use this, call it only once immediately after the
[INativeSDK.waitForData](#waitfordata) function has retrieved data, and use the
result until your next [INativeSDK.waitForData](#waitfordata) call completes.

***

### getTelemetryVariable()

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`index`): `TelemetryVariable`\<`T`\> \| `null`

Defined in: [INativeSDK.ts:208](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L208)

Get the current data for the given Telemetry variable by index. The index
for a given Telemetry variable can be fetched by name via the helper
[INativeSDK.getTelemetryVariableIndex](#gettelemetryvariableindex) function.

This should only be called after [INativeSDK.waitForData](#waitfordata)
has successfully retrieved data.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the variable. |

##### Returns

`TelemetryVariable`\<`T`\> \| `null`

The current variable data, or null if it can't be found.

##### Remarks

Retrieving variable data by index is significantly faster than by name string,
and therefore this version of the function should be preferred over the string
version in performance-critical projects.

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`name`): `TelemetryVariable`\<`T`\> \| `null`

Defined in: [INativeSDK.ts:232](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L232)

Get the current data for the given Telemetry variable by name. This is more
convenient than by index, but is significantly slower. The keys of the
`TelemetryVarList` object in @irsdk-node/types can be used for type safety.

This should only be called after [INativeSDK.waitForData](#waitfordata)
has successfully retrieved data.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `name` | `string` | The variable name. |

##### Returns

`TelemetryVariable`\<`T`\> \| `null`

The current variable data, or null if it can't be found.

##### Remarks

While more convenient, this function performs a linear lookup of the variable
via the string provided every time it is called. The telemetry list can have
over 200 variables, and as such calling this every frame will introduce a
performance hit in your application as every tick will have to perform this
lookup.

It is better to cache the variables index using [INativeSDK.getTelemetryVariableIndex](#gettelemetryvariableindex)
at the beginning of a session, and then re-using that index instead.

***

### getTelemetryVariableIndex()

> **getTelemetryVariableIndex**(`name`): `number` \| `null`

Defined in: [INativeSDK.ts:255](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L255)

Returns the index of the variable with the provided name, or null if not found.

This should only be called after [INativeSDK.waitForData](#waitfordata)
has successfully retrieved data. The keys of the `TelemetryVarList` object
in @irsdk-node/types can be used for type safety.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `name` | `string` | The variable name to look up. |

#### Returns

`number` \| `null`

The index of the variable, or null if it does not exist.

#### Remarks

This performs a linear lookup of the telemetry list to find the index of the
given item, so it is good to cache and re-use this index once you get it.

If fetching a variable that is only available on a single type of car, it is
possible that this cached index will become invalid when switching to a
different type of car that also has it's own variables, so it is a good idea
to renew these cached index variables every time you detect the player has
changed cars.

***

### isRunning()

> **isRunning**(): `boolean`

Defined in: [INativeSDK.ts:122](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L122)

Returns whether or not the SDK is actively receiving iRacing data. If true,
you can assume the player is actively in an iRacing session.

#### Returns

`boolean`

***

### startSDK()

> **startSDK**(): `boolean`

Defined in: [INativeSDK.ts:105](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L105)

Attempts to initialize the SDK, returning the status of whether or not it
was successful.

#### Returns

`boolean`

True if the iRacing has been detected and the SDK was initialized.

#### Remarks

This happens implicitly whenever [INativeSDK.waitForData](#waitfordata)
is called, but can safely be called for clarity and to check whether the sdk
is ready to request data.

***

### stopSDK()

> **stopSDK**(): `void`

Defined in: [INativeSDK.ts:116](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L116)

De-initializes and cleans up the active SDK instance.

#### Returns

`void`

#### Remarks

Will internally reset
all data and close any open handles to the iRacing SDK data. Should always
be called whenever you are done with the SDK, or want to do a full reset.

***

### waitForData()

> **waitForData**(`timeout?`): `boolean`

Defined in: [INativeSDK.ts:142](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node-native/src/INativeSDK.ts#L142)

Attempts to pull data from the iRacing SDK, waiting for a maximum of the
provided timeout for new data if none is available when called.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `timeout?` | `number` | The maximum number of milliseconds to wait for new data. (default: 16) |

#### Returns

`boolean`

True if data was successfully received from the SDK, false if no data found.

#### Remarks

The SDK internally will cache a frame of data for around 16ms before discarding
it for the next frame, and if there is no data available when this is called
it will wait for a maximum of the provided timeout for new data to be available.

This function is synchronous, and will block the current context until data
is received or the timeout has completed.

Internally calls [INativeSDK.startSDK](#startsdk) to lazily initialize the SDK.
