/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { error, log } from 'node:console';
import { exit } from 'node:process';

import { formatDuration } from '@bengsfort/stdlib/formatting/numbers';
import { INativeSDK, NativeSDK } from '@irsdk-node/native';
import {
  BroadcastMessageNames,
  BroadcastMessages,
  CameraFocusCommand,
  CameraState,
  ChatCommand,
  FFBCommand,
  PitCommand,
  ReloadTexturesCommand,
  ReplayPositionCommand,
  ReplaySearchCommand,
  ReplayStateCommand,
  TelemetryCommand,
  VideoCaptureCommand,
} from 'irsdk-node';
import prompts from 'prompts';

// Allows triggering irsdk broadcast messages when connected,
// via a series of prompts.

async function main(): Promise<void> {
  const startTime = performance.now();

  try {
    // Initialize the SDK and wait for data.
    const sdk = new NativeSDK();
    if (!sdk.waitForData(16)) {
      throw new Error(
        'Failed to connect to SDK. Make sure the sim is running and try again.',
      );
    }

    log(`Initializing prompts. Press ctrl + c at any point to quit.`);
    await initPrompt(sdk);

    close(startTime, 0);
  } catch (err) {
    error(err);
    close(startTime, 1);
  }
}

void main();

// --------- utils
async function initPrompt(sdk: INativeSDK): Promise<void> {
  const result = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'msgType',
        message: 'What broadcast command should be run?',
        choices: Object.entries(BroadcastMessageNames).map(([idx, friendlyName]) => ({
          title: friendlyName,
          value: typeof idx !== 'number' ? parseInt(idx, 10) : idx,
        })),
      },
    ],
    {
      onCancel,
    },
  );

  switch (result.msgType as BroadcastMessages) {
    case BroadcastMessages.CameraSwitchPos:
      await cameraSwitchPosPrompt(sdk);
      break;

    case BroadcastMessages.CameraSwitchNum:
      await cameraSwitchNumPrompt(sdk);
      break;

    case BroadcastMessages.CameraSetState:
      await cameraSetStatePrompt(sdk);
      break;

    case BroadcastMessages.ReplaySetPlaySpeed:
      await replaySetPlaySpeedPrompt(sdk);
      break;

    case BroadcastMessages.ReplaySetPlayPosition:
      await replaySetPlayPositionPrompt(sdk);
      break;

    case BroadcastMessages.ReplaySearch:
      await replaySearchPrompt(sdk);
      break;

    case BroadcastMessages.ReplaySetState:
      await replayStatePrompt(sdk);
      break;

    case BroadcastMessages.ReloadTextures:
      await reloadTexturesPrompt(sdk);
      break;

    case BroadcastMessages.ChatCommand:
      await chatCommandPrompt(sdk);
      break;

    case BroadcastMessages.PitCommand:
      await pitCommandPrompt(sdk);
      break;

    case BroadcastMessages.TelemCommand:
      await telemCommandPrompt(sdk);
      break;

    case BroadcastMessages.FFBCommand:
      await ffbCommandPrompt(sdk);
      break;

    case BroadcastMessages.ReplaySearchSessionTime:
      await replaySearchSessionTimePrompt(sdk);
      break;

    case BroadcastMessages.VideoCapture:
      await videoCapturePrompt(sdk);
      break;

    case BroadcastMessages.UnusedPlaceholder:
      log('exiting');
      exit(0);
  }

  return initPrompt(sdk);
}

async function cameraSwitchPosPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'csMode',
        message: 'Cam Switch Mode:',
        choices: [
          { title: 'FocusAtIncident', value: CameraFocusCommand.FocusAtIncident },
          { title: 'FocusAtLeader', value: CameraFocusCommand.FocusAtLeader },
          { title: 'FocusAtExiting', value: CameraFocusCommand.FocusAtExiting },
          { title: 'FocusAtDriver', value: CameraFocusCommand.FocusAtDriver },
        ],
      },
      {
        type: (prev) => (prev === CameraFocusCommand.FocusAtDriver ? 'number' : null),
        name: 'focusDriver',
        message: 'Which driver to focus?',
        float: false,
        initial: 0,
      },
      {
        type: 'number',
        name: 'group',
        message: 'What group to focus?',
        float: false,
        initial: 0,
      },
      {
        type: 'number',
        name: 'camera',
        message: 'Which camera to use?',
        float: false,
        initial: 0,
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.CameraSwitchPos,
    ((res.csMode as number | undefined) ?? 0) +
      ((res.focusDriver as number | undefined) ?? 0),
    res.group as number,
    res.camera as number,
  );
}

async function cameraSwitchNumPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'number',
        name: 'driverIdx',
        message: 'Which driver to focus? (driver index)',
        float: false,
        initial: 0,
      },
      {
        type: 'number',
        name: 'group',
        message: 'What group to focus?',
        float: false,
        initial: 0,
      },
      {
        type: 'number',
        name: 'camera',
        message: 'Which camera to use?',
        float: false,
        initial: 0,
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.CameraSwitchPos,
    res.driverIdx as number,
    res.group as number,
    res.camera as number,
  );
}

async function cameraSetStatePrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'cameraState',
        message: 'New camera state',
        choices: [
          {
            title: 'CamToolActive',
            value: CameraState.CamToolActive,
          },
          {
            title: 'UIHidden',
            value: CameraState.UIHidden,
          },
          {
            title: 'UseAutoShotSelection',
            value: CameraState.UseAutoShotSelection,
          },
          {
            title: 'UseTemporaryEdits',
            value: CameraState.UseTemporaryEdits,
          },
          {
            title: 'UseKeyAcceleration',
            value: CameraState.UseKeyAcceleration,
          },
          {
            title: 'UseKey10xAcceleration',
            value: CameraState.UseKey10xAcceleration,
          },
          {
            title: 'UseMouseAimMode',
            value: CameraState.UseMouseAimMode,
          },
        ],
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(BroadcastMessages.CameraSetState, res.cameraState as CameraState);
}

async function replaySetPlaySpeedPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'number',
        name: 'speed',
        message: 'New replay speed? (0, 1, 2, 4, 8, 16, etc, can be neg)',
        initial: 1,
      },
      {
        type: 'confirm',
        name: 'isSlowMo',
        message: 'Enable slow motion?',
        initial: false,
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.ReplaySetPlaySpeed,
    res.speed as number,
    res.isSlowMo ? 1 : 0,
  );
}

async function replaySetPlayPositionPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Replay position offset',
        choices: [
          {
            title: 'Begin',
            value: ReplayPositionCommand.Begin,
          },
          {
            title: 'Current',
            value: ReplayPositionCommand.Current,
          },
          {
            title: 'End',
            value: ReplayPositionCommand.End,
          },
        ],
      },
      {
        type: 'number',
        name: 'frame',
        message: 'Frame to jump to (66 = 1 second)',
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.ReplaySetPlayPosition,
    res.mode as number,
    res.frame as number,
  );
}

async function replaySearchPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Replay search mode',
        choices: [
          {
            title: 'ToStart',
            value: ReplaySearchCommand.ToStart,
          },
          {
            title: 'ToEnd',
            value: ReplaySearchCommand.ToEnd,
          },
          {
            title: 'PrevSession',
            value: ReplaySearchCommand.PrevSession,
          },
          {
            title: 'NextSession',
            value: ReplaySearchCommand.NextSession,
          },
          {
            title: 'PrevLap',
            value: ReplaySearchCommand.PrevLap,
          },
          {
            title: 'NextLap',
            value: ReplaySearchCommand.NextLap,
          },
          {
            title: 'PrevFrame',
            value: ReplaySearchCommand.PrevFrame,
          },
          {
            title: 'NextFrame',
            value: ReplaySearchCommand.NextFrame,
          },
          {
            title: 'PrevIncident',
            value: ReplaySearchCommand.PrevIncident,
          },
          {
            title: 'NextIncident',
            value: ReplaySearchCommand.NextIncident,
          },
        ],
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(BroadcastMessages.ReplaySearch, res.mode as ReplaySearchCommand);
}

async function replayStatePrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Replay state mode',
        choices: [
          {
            title: 'EraseTape',
            value: ReplayStateCommand.EraseTape,
          },
          {
            title: 'Last',
            value: ReplayStateCommand.Last,
          },
        ],
      },
    ],
    {
      onCancel,
    },
  );

  if (res.mode === ReplayStateCommand.Last) {
    return;
  }

  sdk.broadcast(BroadcastMessages.ReplaySetState, res.mode as ReplayStateCommand);
}

async function reloadTexturesPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Reload texture mode',
        choices: [
          {
            title: 'Reload All',
            value: ReloadTexturesCommand.All,
          },
          {
            title: 'Reload for specific car',
            value: ReloadTexturesCommand.CarIndex,
          },
        ],
      },
      {
        type: (prev) => (prev === ReloadTexturesCommand.CarIndex ? 'number' : null),
        name: 'carIndex',
        message: 'Car index to reload textures',
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.ReloadTextures,
    res.mode as ReloadTexturesCommand,
    (res.carIndex as number | undefined) ?? 0,
  );
}

async function chatCommandPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Chat command',
        choices: [
          {
            title: 'Macro',
            value: ChatCommand.Macro,
          },
          {
            title: 'BeginChat',
            value: ChatCommand.BeginChat,
          },
          {
            title: 'Reply',
            value: ChatCommand.Reply,
          },
          {
            title: 'Cancel',
            value: ChatCommand.Cancel,
          },
        ],
      },
      {
        type: (prev) => (prev === ChatCommand.Macro ? 'number' : null),
        name: 'macro',
        message: 'Macro to trigger',
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.ReloadTextures,
    res.mode as ReloadTexturesCommand,
    (res.macro as number | undefined) ?? 0,
  );
}

async function pitCommandPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Pit command',
        choices: [
          {
            title: 'Clear',
            value: PitCommand.Clear,
          },
          {
            title: 'WS - Clean windshield',
            value: PitCommand.WS,
          },
          {
            title: 'Fuel - Add fuel',
            value: PitCommand.WS,
          },
          {
            title: 'LF - Left front',
            value: PitCommand.LF,
          },
          {
            title: 'RF - Left front',
            value: PitCommand.RF,
          },
          {
            title: 'LR - Left front',
            value: PitCommand.LR,
          },
          {
            title: 'RR - Left front',
            value: PitCommand.RR,
          },
          {
            title: 'Clear tires',
            value: PitCommand.ClearTires,
          },
          {
            title: 'FR - Request fast repair',
            value: PitCommand.FR,
          },
          {
            title: 'Clear windshield changes',
            value: PitCommand.ClearWS,
          },
          {
            title: 'Clear fast repair changes',
            value: PitCommand.ClearFR,
          },
          {
            title: 'Clear Fuel',
            value: PitCommand.ClearFuel,
          },
          {
            title: 'Change tire compound',
            value: PitCommand.ChangeTireCompound,
          },
        ],
      },
      {
        type: (prev) => (prev === PitCommand.Fuel ? 'number' : null),
        name: 'value',
        message: 'Fuel amount in liters (0 to use existing)',
        initial: 0,
      },
      {
        type: (prev) => (prev === PitCommand.LF ? 'number' : null),
        name: 'value',
        message: 'Tire pressure in KPa (0 to use existing)',
        initial: 0,
      },
      {
        type: (prev) => (prev === PitCommand.RF ? 'number' : null),
        name: 'value',
        message: 'Tire pressure in KPa (0 to use existing)',
        initial: 0,
      },
      {
        type: (prev) => (prev === PitCommand.LR ? 'number' : null),
        name: 'value',
        message: 'Tire pressure in KPa (0 to use existing)',
        initial: 0,
      },
      {
        type: (prev) => (prev === PitCommand.RR ? 'number' : null),
        name: 'value',
        message: 'Tire pressure in KPa (0 to use existing)',
        initial: 0,
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.PitCommand,
    res.mode as PitCommand,
    (res.value as number | undefined) ?? 0,
  );
}

async function telemCommandPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Telemetry command',
        choices: [
          {
            title: 'Stop',
            value: TelemetryCommand.Stop,
          },
          {
            title: 'Start',
            value: TelemetryCommand.Start,
          },
          {
            title: 'Restart',
            value: TelemetryCommand.Restart,
          },
        ],
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(BroadcastMessages.TelemCommand, res.mode as TelemetryCommand);
}

async function ffbCommandPrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'FFB command',
        choices: [
          {
            title: 'MaxForce',
            value: FFBCommand.MaxForce,
          },
          {
            title: 'Cancel',
            value: FFBCommand.UnusedPlaceholder,
          },
        ],
      },
      {
        type: (prev) => (prev === FFBCommand.MaxForce ? 'number' : null),
        name: 'value',
        message: 'FFB strength in nm (< 0.0 to use user default)',
        float: true,
        initial: 0.0,
      },
    ],
    {
      onCancel,
    },
  );

  if (res.mode === FFBCommand.UnusedPlaceholder) {
    return;
  }

  sdk.broadcast(
    BroadcastMessages.FFBCommand,
    res.mode as FFBCommand,
    res.value as number,
  );
}

async function replaySearchSessionTimePrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'number',
        name: 'sessionNum',
        message: 'Session number',
      },
      {
        type: 'number',
        name: 'sessionTimeMS',
        message: 'Session time in MS. This will search, not jump, so will be slow',
        float: false,
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(
    BroadcastMessages.ReplaySearchSessionTime,
    res.sessionNum as number,
    res.sessionTimeMS as number,
  );
}

async function videoCapturePrompt(sdk: INativeSDK): Promise<void> {
  const res = await prompts(
    [
      {
        type: 'autocomplete',
        name: 'mode',
        message: 'Capture mode',
        choices: [
          {
            title: 'TriggerScreenShot',
            value: VideoCaptureCommand.TriggerScreenShot,
          },
          {
            title: 'StartVideoCapture',
            value: VideoCaptureCommand.StartVideoCapture,
          },
          {
            title: 'EndVideoCapture',
            value: VideoCaptureCommand.EndVideoCapture,
          },
          {
            title: 'ToggleVideoCapture',
            value: VideoCaptureCommand.ToggleVideoCapture,
          },
          {
            title: 'ShowVideoTimer',
            value: VideoCaptureCommand.ShowVideoTimer,
          },
          {
            title: 'HideVideoTimer',
            value: VideoCaptureCommand.HideVideoTimer,
          },
        ],
      },
    ],
    {
      onCancel,
    },
  );

  sdk.broadcast(BroadcastMessages.VideoCapture, res.mode as VideoCaptureCommand);
}

function close(startTime: number, code: number): never {
  if (code === 0) {
    log(
      `\nCompleted successfully after ${formatDuration(performance.now() - startTime)}.`,
    );
  } else {
    log(`\nFailed after ${formatDuration(performance.now() - startTime)}.`);
  }

  exit(code);
}

function onCancel() {
  log('Thanks!');
  exit(0);
}
