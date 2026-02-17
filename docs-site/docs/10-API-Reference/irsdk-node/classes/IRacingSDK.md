Defined in: [irsdk-node.ts:115](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L115)

Type-safe, performant wrapper class around the iRacing SDK. Can be used for
safely consuming data from and dispatching commands to the iRacing SDK.

This class includes some quality of life API's and optimisations over the raw
SDK bindings.

## See

[https://www.npmjs.com/package/@irsdk-node/native](https://www.npmjs.com/package/@irsdk-node/native)
for a more bare bindings API or to have more control over your own abstractions.

## Constructors

### Constructor

> **new IRacingSDK**(`config?`): `IRacingSDK`

Defined in: [irsdk-node.ts:153](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L153)

Instantiate an instance of this SDK wrapper.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `config?` | [`Config`](../interfaces/Config.md) | Configuration options to instantiate with. |

#### Returns

`IRacingSDK`

## Properties

### autoEnableTelemetry

> **autoEnableTelemetry**: `boolean` = `DefaultConfig.autoEnableTelemetry`

Defined in: [irsdk-node.ts:121](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L121)

Enable attempting to auto-start telemetry when starting the SDK (if it is not running).

#### Default Value

```ts
false
```

***

### logLevel

> **logLevel**: `LogLevel` = `DefaultConfig.logLevel`

Defined in: [irsdk-node.ts:127](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L127)

The logging level to use when calling irsdk-node API's. Defaults to 0 (LogLevel.None).

#### Default Value

```ts
LogLevel.None
```

***

### useTelemVariableCache

> **useTelemVariableCache**: `boolean` = `DefaultConfig.useTelemVariableCache`

Defined in: [irsdk-node.ts:140](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L140)

Whether or not to use an internal look-up cache when fetching Telemetry Variables by
name. This can provide a performance benefit, but may produce unwanted behaviour when
enabled in long-running processes where access of niche, car-specific variables over
multiple sessions is common.

When enabled, if being used in long-running processes it is recommended to clear the
cache whenever you detect the player has changed cars.

#### Default Value

```ts
true
```

## Accessors

### currDataVersion

#### Get Signature

> **get** **currDataVersion**(): `number`

Defined in: [irsdk-node.ts:206](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L206)

The current version number of the session data. Increments internally every time data changes.

##### Returns

`number`

***

### enableLogging

#### Get Signature

> **get** **enableLogging**(): `boolean`

Defined in: [irsdk-node.ts:214](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L214)

Whether or not to enable logging in the SDK.

##### Deprecated

v4.3.0 - Please use [IRacingSDK.logLevel](#loglevel) is instead.

##### Returns

`boolean`

#### Set Signature

> **set** **enableLogging**(`value`): `void`

Defined in: [irsdk-node.ts:218](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L218)

##### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### sessionStatusOK

#### Get Signature

> **get** **sessionStatusOK**(): `boolean`

Defined in: [irsdk-node.ts:249](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L249)

Retrieves from the native SDK whether it is actively connected and receiving
data. Must be used in conjunction with [IRacingSDK.waitForData](#waitfordata).

If true, it is safe to assume the local player is actively in an iRacing
session.

##### Returns

`boolean`

## Methods

### broadcastUnsafe()

> **broadcastUnsafe**\<`Command`\>(`message`, ...`args`): `boolean`

Defined in: [irsdk-node.ts:859](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L859)

Trigger a broadcast manually, without any safety guard rails. Only use if
you know what you are doing!

The function still uses the SDK type map for type-awareness. If you need to
turn these off for some reason, toss

#### Type Parameters

| Type Parameter | theme_default_type |
| ------ | ------ |
| `Command` *extends* keyof `BroadcastArgsMap` | keyof `BroadcastArgsMap` |

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `message` | `Command` | The Broadcast Message type. |
| ...`args` | `BroadcastCommandArgs`\<`Command`\> | Args for the message. Can be up to 3 numbers. |

#### Returns

`boolean`

#### Ts-expect-error

in a command on the
line before it to disable the type safety.

***

### changeCameraNumber()

> **changeCameraNumber**(`driver`, `group`, `camera`): `void`

Defined in: [irsdk-node.ts:648](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L648)

Broadcast a command to iRacing to change the driver the camera is focusing.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `driver` | `number` | The driver index to focus on. |
| `group` | `number` | The group number to focus at. |
| `camera` | `number` | The camera to use. |

#### Returns

`void`

#### Remarks

This requires the player to be outside of the car, and will not do anything
otherwise.

#### See

[IRacingSDK.getCameraInfo](#getcamerainfo) for finding what cameras are available.

***

### changeCameraPosition()

> **changeCameraPosition**(`focusMode`, `group`, `camera`): `void`

Defined in: [irsdk-node.ts:631](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L631)

Broadcast a command to iRacing to switch the current camera mode, which
allows you to pick what car or group to focus at, and with what camera.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `focusMode` | `number` | The 'focus at' type for the camera system to change to. Use the car number to focus at a specific driver. |
| `group` | `number` | The group number to focus at. |
| `camera` | `number` | The camera to use. |

#### Returns

`void`

#### Remarks

This requires the player to be outside of the car, and will not do anything
otherwise.

#### See

[IRacingSDK.getCameraInfo](#getcamerainfo) for finding what cameras are available.

#### Todo

This broadcast message has changed over time and the name is very outdated.
      Look at updating the name to better reflect the functionality.

***

### changeCameraState()

> **changeCameraState**(`state`): `void`

Defined in: [irsdk-node.ts:661](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L661)

Broadcast a command to iRacing to update the camera state.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `state` | `CameraState` | The new camera state to apply. |

#### Returns

`void`

#### Remarks

This requires the player to be outside of the car, and will not do anything
otherwise.

***

### changeFFB()

> **changeFFB**(`mode`, `amount`): `void`

Defined in: [irsdk-node.ts:835](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L835)

Broadcast to iRacing to change the current force feedback strength.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `mode` | `FFBCommand` | The adjustment mode. |
| `amount` | `number` | FFB strength in nm (< 0.0 to use user default). |

#### Returns

`void`

#### Remarks

***

### changeReplayPosition()

> **changeReplayPosition**(`position`, `frame`): `void`

Defined in: [irsdk-node.ts:690](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L690)

Broadcast a command to iRacing to set the current position in the replay.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `position` | `ReplayPositionCommand` | The anchor to apply the `frame` offset to. |
| `frame` | `number` | The number of frames to jump forward or backwards. |

#### Returns

`void`

#### Remarks

This command is only available outside of the car. Offset should be calculated
via frames, so to jump forward 1 second it would be 66 frames.

***

### changeReplaySpeed()

> **changeReplaySpeed**(`speed`, `slowMotion`): `void`

Defined in: [irsdk-node.ts:675](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L675)

Broadcast a command to iRacing to set the current replay speed.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `speed` | `number` | The new replay speed. |
| `slowMotion` | `boolean` | Whether to enable slow motion. |

#### Returns

`void`

#### Remarks

The speed should be a power of 2, and can be negative. Ex:
-16, -8, -4, -2, -1, 0, 1, 2, 4, 8, 16

***

### changeReplayState()

> **changeReplayState**(`state`): `void`

Defined in: [irsdk-node.ts:713](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L713)

Broadcast a message to iRacing to adjust the replay state. This is only used
to erase the replay data via `ReplayStateCommand.EraseTape`.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `state` | `ReplayStateCommand` | The state command to apply. |

#### Returns

`void`

***

### enableTelemetry()

> **enableTelemetry**(`enabled`): `void`

Defined in: [irsdk-node.ts:601](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L601)

Broadcast a command to iRacing to enable or disable telemetry recording.

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`void`

***

### getCameraInfo()

> **getCameraInfo**(): `CameraInfo` \| `null`

Defined in: [irsdk-node.ts:410](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L410)

Helper utility for getting the current camera info from the Session Data.

#### Returns

`CameraInfo` \| `null`

The current session camera information, or null if no session active.

#### Remarks

This can be used to find available cameras that can be controlled via message
broadcasting.

#### See

 - [IRacingSDK.changeCameraPosition](#changecameraposition)
 - [IRacingSDK.changeCameraNumber](#changecameranumber)
 - [IRacingSDK.changeCameraState](#changecamerastate)

***

### getCarSetupInfo()

> **getCarSetupInfo**(): `CarSetupInfo` \| `null`

Defined in: [irsdk-node.ts:458](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L458)

Helper utility for getting car setup information from the Session Data. This
can be used to retrieve all available car setup information for the current
car/session.

#### Returns

`CarSetupInfo` \| `null`

The car setup info, or null if no session active.

***

### getDriverInfo()

> **getDriverInfo**(): `DriverInfo` \| `null`

Defined in: [irsdk-node.ts:434](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L434)

Helper utility for getting the current driver info from the Session Data.
This can be used to get generic data about the local driver data as well as
all other drivers in the current session.

#### Returns

`DriverInfo` \| `null`

The current DriverInfo, or null if no session is active.

***

### getRadioInfo()

> **getRadioInfo**(): `RadioInfo` \| `null`

Defined in: [irsdk-node.ts:422](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L422)

Helper utility for getting the current radio info from the Session Data,
providing a way to crawl the available radio channels for the current
session.

#### Returns

`RadioInfo` \| `null`

The current RadioInfo, or null if no session is active.

***

### getSessionConnectionID()

> **getSessionConnectionID**(): `number`

Defined in: [irsdk-node.ts:367](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L367)

Gets the ID for the current (or previous, if none active) iRacing connection.

#### Returns

`number`

***

### getSessionData()

> **getSessionData**(): `SessionData` \| `null`

Defined in: [irsdk-node.ts:340](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L340)

Returns the latest version of the Session Data object. This should only be
called after INativeSDK.waitForData has successfully retrieved data
from iRacing.

#### Returns

`SessionData` \| `null`

The current session data, or null if none available.

#### Remarks

This internally caches the session data version and will automatically fetch,
parse, and return the latest version if the cached data is out of date. The
object returned from this can be assumed to be the most up to date data.

Has to parse the YAML string returned by the SDK whenever handling fresh
data, which can be expensive. Due to the internal caching this penalty is
minimized and this function is generally safe to call multiple times per frame.

***

### getSessionInfo()

> **getSessionInfo**(): `SessionList` \| `null`

Defined in: [irsdk-node.ts:391](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L391)

Helper utility for retrieving the current SessionInfo from the Session Data.
This includes a list of all of the Sessions of the current iRacing instance,
including the official/pending results such as fastest lap information,
session results, number of laps, etc.

#### Returns

`SessionList` \| `null`

The current session list, or null if no session is active.

***

### getSessionVersionNum()

> **getSessionVersionNum**(): `number`

Defined in: [irsdk-node.ts:360](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L360)

Gets the version number of the latest session data from the SDK. Skips all
caches. This can be used to independently check version numbers if performing
custom cache-busting.

#### Returns

`number`

***

### getSplitInfo()

> **getSplitInfo**(): `SplitTimeInfo` \| `null`

Defined in: [irsdk-node.ts:446](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L446)

Helper utility for getting the Sector information for the current session
from Session Data. This provides the definition of where each sector for
the current session starts, allowing you to calculate splits.

#### Returns

`SplitTimeInfo` \| `null`

The sector configuration, or null if no session is active.

***

### getTelemetry()

> **getTelemetry**(): `TelemetryVarList`

Defined in: [irsdk-node.ts:481](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L481)

Returns an object containing the current value of every available telemetry
variable. This should only be called after [IRacingSDK.waitForData](#waitfordata)
has successfully retrieved data. Prefer [IRacingSDK.getTelemetryVariable](#gettelemetryvariable).

#### Returns

`TelemetryVarList`

An object with every telemetry variable available.

#### Remarks

This walks the entire telemetry data to generate the telemetry data on-demand,
and as such this is a very performance intensive function. Prefer retrieving
only the variables that you need via [IRacingSDK.getTelemetryVariable](#gettelemetryvariable)
instead in performance-critical applications.

If you must use this, call it only once immediately after the
[IRacingSDK.waitForData](#waitfordata) function has retrieved data, and use the
result until your next [IRacingSDK.waitForData](#waitfordata) call completes.

***

### getTelemetryVariable()

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`index`): `TelemetryVariable`\<`T`[]\> \| `null`

Defined in: [irsdk-node.ts:516](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L516)

Get the current data for the given Telemetry variable by index. The index
for a given Telemetry variable can be fetched by name via the helper
IRacingSDK.getTelemetryVariableIndex function.

This should only be called after [IRacingSDK.waitForData](#waitfordata)
has successfully retrieved data.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` \| `boolean` |

##### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `index` | `number` | The index of the variable. |

##### Returns

`TelemetryVariable`\<`T`[]\> \| `null`

The current variable data, or null if it can't be found.

##### Remarks

Retrieving variable data by index is significantly faster than by name string,
and therefore this version of the function should be preferred over the string
version in performance-critical projects.

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`varName`): `TelemetryVariable`\<`T`[]\> \| `null`

Defined in: [irsdk-node.ts:542](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L542)

Get the current data for the given Telemetry variable by name. This is more
convenient than by index, but is significantly slower. The keys of the
`TelemetryVarList` object in @irsdk-node/types can be used for type safety.

This should only be called after [IRacingSDK.waitForData](#waitfordata)
has successfully retrieved data.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` \| `boolean` |

##### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `varName` | keyof `TelemetryVarList` |

##### Returns

`TelemetryVariable`\<`T`[]\> \| `null`

The current variable data, or null if it can't be found.

##### Remarks

While more convenient, this function performs a linear lookup of the variable
via the string provided every time it is called. The telemetry list can have
over 200 variables, and as such calling this every frame will introduce a
performance hit in your application as every tick will have to perform this
lookup.

It is better to cache the variables index using IRacingSDK.getTelemetryVariableIndex
at the beginning of a session, and then re-using that index instead.

***

### getWeekendInfo()

> **getWeekendInfo**(): `WeekendInfo` \| `null`

Defined in: [irsdk-node.ts:378](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L378)

Helper utility for retrieving the current WeekendInfo from the Session Data.
This includes general information about the current sessions configuration,
like time of day, date, weather types, track info, etc.

#### Returns

`WeekendInfo` \| `null`

Current Weekend Info data or null, if no session is active.

***

### ~~ready()~~

> **ready**(): `Promise`\<`boolean`\>

Defined in: [irsdk-node.ts:198](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L198)

Wait for the SDK module to resolve and load.

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

This is no longer needed as of v4.0.3. Please remove.

***

### reloadAllTextures()

> **reloadAllTextures**(): `void`

Defined in: [irsdk-node.ts:735](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L735)

Broadcast to iRacing to reload all car textures.

#### Returns

`void`

***

### reloadCarTextures()

> **reloadCarTextures**(`car`): `void`

Defined in: [irsdk-node.ts:744](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L744)

Broadcast to iRacing to reload only the given cars textures.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `car` | `number` | The car (driver index) to reload textures for. |

#### Returns

`void`

***

### resetTelemetryVariableCache()

> **resetTelemetryVariableCache**(): `void`

Defined in: [irsdk-node.ts:591](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L591)

Resets the internal telemetry variable lookup cache. This occurs automatically
whenever the SDK starts and stops, and is only necessary to call if:

- `.useTelemVariableCache` is enabled via the `Config` passed to the `IRacingSDK` constructor
or by the propertyy on the IRacingSDK instance.
- The SDK is being used in a long-running process where potentially niche variables (variables
only available for one car) are frequently accessed and the player changes between cars with
these niche variables frequently.

If that is the case, this function should be called whenever it is detected that the player
has changed cars, to make sure there are no stale variables in the cache.

#### Returns

`void`

***

### restartTelemetry()

> **restartTelemetry**(): `void`

Defined in: [irsdk-node.ts:610](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L610)

Broadcast a command to iRacing to write the current telemetry file to disk
and start a new one.

#### Returns

`void`

***

### searchReplay()

> **searchReplay**(`command`): `void`

Defined in: [irsdk-node.ts:703](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L703)

Broadcast a command to iRacing to seek through the replay to the given target.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `command` | `ReplaySearchCommand` | The target to seek to. |

#### Returns

`void`

#### Remarks

Requires you to be outside of the car.

***

### startSDK()

> **startSDK**(): `boolean`

Defined in: [irsdk-node.ts:265](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L265)

Attempts to initialize the native SDK and necessary buffers to receive data,
returning if it was successful or not.

#### Returns

`boolean`

If the SDK started successfully.

#### Remarks

This gets called implicitly during [IRacingSDK.waitForData](#waitfordata), however
calling it before requesting data can lead to better clarity. If enabled,
this will also reset the telemetry variable cache and enable telemetry if
initialization is successful.

***

### stopSDK()

> **stopSDK**(): `void`

Defined in: [irsdk-node.ts:285](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L285)

Closes and cleans up the currently active SDK instance, resetting the internal
telemetry caches and data versions. Should always be called whenever you are
done with the SDK or want a full state reset.

#### Returns

`void`

***

### triggerChatMacro()

> **triggerChatMacro**(`macro`): `void`

Defined in: [irsdk-node.ts:768](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L768)

Broadcast to iRacing to trigger the given chat macro.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `macro` | `number` | Between 1 - 15 |

#### Returns

`void`

***

### triggerChatState()

> **triggerChatState**(`state`): `void`

Defined in: [irsdk-node.ts:757](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L757)

Broadcast to iRacing to update the chat state to the provided state.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `state` | `BeginChat` \| `Reply` \| `Cancel` | The target chat state. |

#### Returns

`void`

***

### triggerPitChange()

> **triggerPitChange**(`command`, `amount`): `void`

Defined in: [irsdk-node.ts:816](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L816)

Broadcast to iRacing to change the amount to apply to a given command.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `command` | `Fuel` \| `LF` \| `RF` \| `LR` \| `RR` | The pit value to change. |
| `amount` | `number` | The amount to change the value to. |

#### Returns

`void`

#### Remarks

This can be used to adjust the amount of fuel, tire pressure, etc. in the
next pit stop:

- Fuel, amount is in liters (0 - existing).
- Tires, amount is tire pressure in KPa (0 - existing).

***

### triggerPitClearCommand()

> **triggerPitClearCommand**(`command`): `void`

Defined in: [irsdk-node.ts:778](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L778)

Broadcast to iRacing to clear the given pit command.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `command` | `Clear` \| `ClearTires` \| `ClearWS` \| `ClearFR` \| `ClearFuel` | The command to clear. |

#### Returns

`void`

***

### triggerPitCommand()

> **triggerPitCommand**(`command`): `void`

Defined in: [irsdk-node.ts:798](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L798)

Broadcast to iRacing to trigger the given pit command.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `command` | `WS` \| `FR` | The pit command to trigger. |

#### Returns

`void`

#### Remarks

This command can then be cleared by [IRacingSDK.triggerPitClearCommand](#triggerpitclearcommand)

***

### triggerReplaySessionSearch()

> **triggerReplaySessionSearch**(`session`, `time`): `void`

Defined in: [irsdk-node.ts:728](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L728)

Broadcast a message to iRacing to seek to the provided session time.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `session` | `number` | The session number to look in. |
| `time` | `number` | The time to search for. |

#### Returns

`void`

#### Remarks

This does not jump to the time, and instead searches for it. It might take
a while!

***

### triggerVideoCapture()

> **triggerVideoCapture**(`command`): `void`

Defined in: [irsdk-node.ts:844](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L844)

Broadcast to iRacing to trigger the given video capture mode.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `command` | `VideoCaptureCommand` | The mode to trigger. |

#### Returns

`void`

***

### waitForData()

> **waitForData**(`timeout?`): `boolean`

Defined in: [irsdk-node.ts:312](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L312)

Attempts to pull data from the iRacing SDK, waiting for a maximum of the
provided timeout for new data if none is available when called.

Can be used to detect joining/leaving a session by checking the return value
against the previous return value.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `timeout?` | `number` | — The maximum number of milliseconds to wait for new data. (default: 16) |

#### Returns

`boolean`

— True if data was successfully received from the SDK, false if no data available.

#### Remarks

The SDK internally will cache a frame of data for around 16ms before
discarding it for the next frame, and if there is no data available when
this is called it will wait for a maximum of the provided timeout for new
data to be available.

This function is synchronous, and will block the current context until data
is received or the timeout has completed.

Internally calls [IRacingSDK.startSDK](#startsdk) to lazily initialize the SDK.

***

### IsSimRunning()

> `static` **IsSimRunning**(): `Promise`\<`boolean`\>

Defined in: [irsdk-node.ts:230](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node/src/irsdk-node.ts#L230)

Makes a request to the endpoint the iRacing service exposes when installed
and running to check if it is available. This can be used to determine if
the current device has iRacing installed and running, but does not determine
if the local player is currently in an iRacing session.

#### Returns

`Promise`\<`boolean`\>

True if the service is running.
