import {
  BroadcastMessages,
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
} from './defines.js';

interface BroadcastArgsMap {
  [BroadcastMessages.CameraSwitchPos]: [carPos: number, group: number, camera: number];
  [BroadcastMessages.CameraSwitchNum]: [driverIdx: number, group: number, camera: number];
  [BroadcastMessages.CameraSetState]: [state: CameraState];
  [BroadcastMessages.ReplaySetPlaySpeed]: [speed: number, slowMotion: 1 | 0];
  [BroadcastMessages.ReplaySetPlayPosition]: [
    offsetMode: ReplayPositionCommand,
    frameNumber: number,
  ];
  [BroadcastMessages.ReplaySearch]: [searchMode: ReplaySearchCommand];
  [BroadcastMessages.ReplaySetState]: [stateMode: ReplayStateCommand];
  [BroadcastMessages.ReloadTextures]: [reloadMode: ReloadTexturesCommand, carIdx: number];
  [BroadcastMessages.ChatCommand]:
    | [command: ChatCommand.Macro, macroIdx: number]
    | [command: ChatCommand];
  [BroadcastMessages.PitCommand]: [command: PitCommand, value: number];
  [BroadcastMessages.TelemCommand]: [command: TelemetryCommand];
  [BroadcastMessages.FFBCommand]: [command: FFBCommand, floatValue: number];
  [BroadcastMessages.ReplaySearchSessionTime]: [
    sessionNum: number,
    sessionTimeMS: number,
  ];
  [BroadcastMessages.VideoCapture]: [mode: VideoCaptureCommand];
}

export type BroadcastCommand = keyof BroadcastArgsMap;
export type BroadcastCommandArgs<Command extends BroadcastCommand = BroadcastCommand> =
  BroadcastArgsMap[Command];
