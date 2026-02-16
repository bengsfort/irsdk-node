Defined in: [irsdk-node.ts:75](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L75)

## Constructors

### Constructor

> **new IRacingSDK**(`config?`): `IRacingSDK`

Defined in: [irsdk-node.ts:109](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L109)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `config?` | [`Config`](../interfaces/Config.md) |

#### Returns

`IRacingSDK`

## Properties

### autoEnableTelemetry

> **autoEnableTelemetry**: `boolean` = `DefaultConfig.autoEnableTelemetry`

Defined in: [irsdk-node.ts:81](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L81)

Enable attempting to auto-start telemetry when starting the SDK (if it is not running).

#### Default

```ts
false
```

***

### logLevel

> **logLevel**: `LogLevel` = `DefaultConfig.logLevel`

Defined in: [irsdk-node.ts:87](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L87)

The logging level to use when calling irsdk-node API's. Defaults to 0 (LogLevel.None).

#### Default

```ts
0
```

***

### useTelemVariableCache

> **useTelemVariableCache**: `boolean` = `DefaultConfig.useTelemVariableCache`

Defined in: [irsdk-node.ts:100](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L100)

Whether or not to use an internal look-up cache when fetching Telemetry Variables by
name. This can provide a performance benefit, but may produce unwanted behaviour when
enabled in long-running processes where access of niche, car-specific variables over
multiple sessions is common.

When enabled, if being used in long-running processes it is recommended to clear the
cache whenever you detect the player has changed cars.

#### Default

```ts
true
```

## Accessors

### currDataVersion

#### Get Signature

> **get** **currDataVersion**(): `number`

Defined in: [irsdk-node.ts:165](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L165)

The current version number of the session data. Increments internally every time data changes.

##### Returns

`number`

***

### enableLogging

#### Get Signature

> **get** **enableLogging**(): `boolean`

Defined in: [irsdk-node.ts:172](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L172)

Whether or not to enable verbose logging in the SDK.

##### Returns

`boolean`

#### Set Signature

> **set** **enableLogging**(`value`): `void`

Defined in: [irsdk-node.ts:176](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L176)

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

Defined in: [irsdk-node.ts:196](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L196)

##### Returns

`boolean`

## Methods

### broadcastUnsafe()

> **broadcastUnsafe**\<`Command`\>(`message`, ...`args`): `boolean`

Defined in: [irsdk-node.ts:543](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L543)

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

Defined in: [irsdk-node.ts:443](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L443)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `driver` | `number` |
| `group` | `number` |
| `camera` | `number` |

#### Returns

`void`

***

### changeCameraPosition()

> **changeCameraPosition**(`position`, `group`, `camera`): `void`

Defined in: [irsdk-node.ts:438](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L438)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `position` | `number` |
| `group` | `number` |
| `camera` | `number` |

#### Returns

`void`

***

### changeCameraState()

> **changeCameraState**(`state`): `void`

Defined in: [irsdk-node.ts:447](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L447)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `state` | `CameraState` |

#### Returns

`void`

***

### changeFFB()

> **changeFFB**(`mode`, `amount`): `void`

Defined in: [irsdk-node.ts:524](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L524)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `mode` | `FFBCommand` |
| `amount` | `number` |

#### Returns

`void`

***

### changeReplayPosition()

> **changeReplayPosition**(`position`, `frame`): `void`

Defined in: [irsdk-node.ts:455](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L455)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `position` | `ReplayPositionCommand` |
| `frame` | `number` |

#### Returns

`void`

***

### changeReplaySpeed()

> **changeReplaySpeed**(`speed`, `slowMotion`): `void`

Defined in: [irsdk-node.ts:451](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L451)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `speed` | `number` |
| `slowMotion` | `boolean` |

#### Returns

`void`

***

### changeReplayState()

> **changeReplayState**(`state`): `void`

Defined in: [irsdk-node.ts:463](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L463)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `state` | `ReplayStateCommand` |

#### Returns

`void`

***

### enableTelemetry()

> **enableTelemetry**(`enabled`): `void`

Defined in: [irsdk-node.ts:429](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L429)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `enabled` | `boolean` |

#### Returns

`void`

***

### getCameraInfo()

> **getCameraInfo**(): `CameraInfo` \| `null`

Defined in: [irsdk-node.ts:298](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L298)

Gets the current camera info from the session data.

#### Returns

`CameraInfo` \| `null`

***

### getCarSetupInfo()

> **getCarSetupInfo**(): `CarSetupInfo` \| `null`

Defined in: [irsdk-node.ts:334](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L334)

Gets the current session info from the session data.

#### Returns

`CarSetupInfo` \| `null`

***

### getDriverInfo()

> **getDriverInfo**(): `DriverInfo` \| `null`

Defined in: [irsdk-node.ts:316](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L316)

Gets the current driver info from the session data.

#### Returns

`DriverInfo` \| `null`

***

### getRadioInfo()

> **getRadioInfo**(): `RadioInfo` \| `null`

Defined in: [irsdk-node.ts:307](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L307)

Gets the current radio info from the session data.

#### Returns

`RadioInfo` \| `null`

***

### getSessionConnectionID()

> **getSessionConnectionID**(): `number`

Defined in: [irsdk-node.ts:272](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L272)

Gets the ID for the current (or previous, if none active) connection.

#### Returns

`number`

***

### getSessionData()

> **getSessionData**(): `SessionData` \| `null`

Defined in: [irsdk-node.ts:247](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L247)

Gets the current session data (from yaml format).

#### Returns

`SessionData` \| `null`

***

### getSessionInfo()

> **getSessionInfo**(): `SessionList` \| `null`

Defined in: [irsdk-node.ts:289](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L289)

Gets the current session info from the session data.

#### Returns

`SessionList` \| `null`

***

### getSessionVersionNum()

> **getSessionVersionNum**(): `number`

Defined in: [irsdk-node.ts:265](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L265)

Gets the version number of the latest session data from the SDK.

#### Returns

`number`

***

### getSplitInfo()

> **getSplitInfo**(): `SplitTimeInfo` \| `null`

Defined in: [irsdk-node.ts:325](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L325)

Gets the current split time info from the session data.

#### Returns

`SplitTimeInfo` \| `null`

***

### getTelemetry()

> **getTelemetry**(): `TelemetryVarList`

Defined in: [irsdk-node.ts:346](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L346)

Get the current value of the telemetry variables.

Telemetry gets updated every tick. This is a large object, so large amounts
of processing between ticks should attempt to cache this data instead of
re-requesting it via this function.

#### Returns

`TelemetryVarList`

***

### getTelemetryVariable()

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`index`): `TelemetryVariable`\<`T`[]\> \| `null`

Defined in: [irsdk-node.ts:367](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L367)

Request the value of the given telemetry variable.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` \| `boolean` |

##### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `index` | `number` | The number index of the variable. Only use if you know what you are doing! |

##### Returns

`TelemetryVariable`\<`T`[]\> \| `null`

#### Call Signature

> **getTelemetryVariable**\<`T`\>(`varName`): `TelemetryVariable`\<`T`[]\> \| `null`

Defined in: [irsdk-node.ts:375](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L375)

Request the value of the given telemetry variable.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` \| `boolean` |

##### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `varName` | keyof `TelemetryVarList` | The name of the variable to retrieve. |

##### Returns

`TelemetryVariable`\<`T`[]\> \| `null`

***

### getWeekendInfo()

> **getWeekendInfo**(): `WeekendInfo` \| `null`

Defined in: [irsdk-node.ts:280](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L280)

Gets the current weekend info from the session data

#### Returns

`WeekendInfo` \| `null`

***

### ~~ready()~~

> **ready**(): `Promise`\<`boolean`\>

Defined in: [irsdk-node.ts:156](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L156)

Wait for the SDK module to resolve and load.

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

This is no longer needed as of v4.0.3. Please remove.

***

### reloadAllTextures()

> **reloadAllTextures**(): `void`

Defined in: [irsdk-node.ts:471](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L471)

#### Returns

`void`

***

### reloadCarTextures()

> **reloadCarTextures**(`car`): `void`

Defined in: [irsdk-node.ts:475](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L475)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `car` | `number` |

#### Returns

`void`

***

### resetTelemetryVariableCache()

> **resetTelemetryVariableCache**(): `void`

Defined in: [irsdk-node.ts:424](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L424)

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

Defined in: [irsdk-node.ts:434](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L434)

#### Returns

`void`

***

### searchReplay()

> **searchReplay**(`command`): `void`

Defined in: [irsdk-node.ts:459](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L459)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `command` | `ReplaySearchCommand` |

#### Returns

`void`

***

### startSDK()

> **startSDK**(): `boolean`

Defined in: [irsdk-node.ts:204](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L204)

Starts the native iRacing SDK and begins subscribing for data.

#### Returns

`boolean`

If the SDK started successfully.

***

### stopSDK()

> **stopSDK**(): `void`

Defined in: [irsdk-node.ts:222](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L222)

Stops the SDK from running and resets the data version.

#### Returns

`void`

***

### triggerChatMacro()

> **triggerChatMacro**(`macro`): `void`

Defined in: [irsdk-node.ts:492](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L492)

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `macro` | `number` | Between 1 - 15 |

#### Returns

`void`

***

### triggerChatState()

> **triggerChatState**(`state`): `void`

Defined in: [irsdk-node.ts:483](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L483)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `state` | `BeginChat` \| `Reply` \| `Cancel` |

#### Returns

`void`

***

### triggerPitChange()

> **triggerPitChange**(`command`, `amount`): `void`

Defined in: [irsdk-node.ts:512](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L512)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `command` | `Fuel` \| `LF` \| `RF` \| `LR` \| `RR` |
| `amount` | `number` |

#### Returns

`void`

***

### triggerPitClearCommand()

> **triggerPitClearCommand**(`command`): `void`

Defined in: [irsdk-node.ts:497](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L497)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `command` | `Clear` \| `ClearTires` \| `ClearWS` \| `ClearFR` \| `ClearFuel` |

#### Returns

`void`

***

### triggerPitCommand()

> **triggerPitCommand**(`command`): `void`

Defined in: [irsdk-node.ts:508](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L508)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `command` | `WS` \| `FR` |

#### Returns

`void`

***

### triggerReplaySessionSearch()

> **triggerReplaySessionSearch**(`session`, `time`): `void`

Defined in: [irsdk-node.ts:467](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L467)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `session` | `number` |
| `time` | `number` |

#### Returns

`void`

***

### triggerVideoCapture()

> **triggerVideoCapture**(`command`): `void`

Defined in: [irsdk-node.ts:528](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L528)

#### Parameters

| Parameter | theme_type |
| ------ | ------ |
| `command` | `VideoCaptureCommand` |

#### Returns

`void`

***

### waitForData()

> **waitForData**(`timeout?`): `boolean`

Defined in: [irsdk-node.ts:232](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L232)

Wait for new data from the sdk.

#### Parameters

| Parameter | theme_type | theme_description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Timeout (in ms). Max is 60fps (1/60) |

#### Returns

`boolean`

***

### IsSimRunning()

> `static` **IsSimRunning**(): `Promise`\<`boolean`\>

Defined in: [irsdk-node.ts:186](https://github.com/bengsfort/irsdk-node/blob/e132d1efb51a68bc5bb535f34ca70a1e09912640/packages/irsdk-node/src/irsdk-node.ts#L186)

Checks whether the simulation service is running.

#### Returns

`Promise`\<`boolean`\>

True if the service is running.
