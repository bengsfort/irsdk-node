Defined in: [defines.ts:434](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L434)

Messages for controlling the sim via the SDK.

- Camera and replay commands only work outside of the car.
- Pit commands only work when in the car.

Represents `irsdk_BroadcastMsg`

## Enumeration Members

### CameraSetState

> **CameraSetState**: `2`

Defined in: [defines.ts:440](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L440)

Change the camera state. (Requires being outside of the car.)

***

### CameraSwitchNum

> **CameraSwitchNum**: `1`

Defined in: [defines.ts:438](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L438)

Switch the driver number to follow. (Requires being outside of the car.)

***

### CameraSwitchPos

> **CameraSwitchPos**: `0`

Defined in: [defines.ts:436](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L436)

Switch the camera position. (Requires being outside of the car.)

***

### ChatCommand

> **ChatCommand**: `8`

Defined in: [defines.ts:452](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L452)

Broadcast a chat command.

***

### FFBCommand

> **FFBCommand**: `11`

Defined in: [defines.ts:458](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L458)

Broadcast a force feedback command.

***

### PitCommand

> **PitCommand**: `9`

Defined in: [defines.ts:454](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L454)

Broadcast a pit command. (Requires being in the car.)

***

### ReloadTextures

> **ReloadTextures**: `7`

Defined in: [defines.ts:450](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L450)

Trigger a texture reload.

***

### ReplaySearch

> **ReplaySearch**: `5`

Defined in: [defines.ts:446](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L446)

Enter replay search mode. (Requires being outside of the car.)

***

### ReplaySearchSessionTime

> **ReplaySearchSessionTime**: `12`

Defined in: [defines.ts:463](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L463)

Trigger searching to a replay time. (Requires being outside of the car.)
This does a search, and not a direct jump, so it may take a while!

***

### ReplaySetPlayPosition

> **ReplaySetPlayPosition**: `4`

Defined in: [defines.ts:444](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L444)

Jump to a different part of the replay. (Requires being outside of the car.)

***

### ReplaySetPlaySpeed

> **ReplaySetPlaySpeed**: `3`

Defined in: [defines.ts:442](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L442)

Change the play speed of a replay. (Requires being outside of the car.)

***

### ReplaySetState

> **ReplaySetState**: `6`

Defined in: [defines.ts:448](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L448)

Change the replay state.  (Requires being outside of the car.)

***

### TelemCommand

> **TelemCommand**: `10`

Defined in: [defines.ts:456](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L456)

Broadcast a telemetry command.

***

### UnusedPlaceholder

> **UnusedPlaceholder**: `14`

Defined in: [defines.ts:467](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L467)

Unused placeholder - do not use!

***

### VideoCapture

> **VideoCapture**: `13`

Defined in: [defines.ts:465](https://github.com/bengsfort/irsdk-node/blob/143c732935572eda2b1dcfcac2953a5daba537f8/packages/irsdk-node-types/src/defines.ts#L465)

Trigger video capture.
