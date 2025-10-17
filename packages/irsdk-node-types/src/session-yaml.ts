import { RadioInfo } from './radio-info.js';
import { CameraInfo } from './camera-info.js';
import { SessionList } from './session-info.js';
import { WeekendInfo } from './weekend-info.js';
import { DriverInfo } from './driver-info.js';
import { SplitTimeInfo } from './split-info.js';
import { CarSetupInfo } from './setup-info.js';

/**
 * Information about the current session, stored as yaml.
 * Does not update as much as telemetry.
 * @todo the CarSetup types are incomplete. Help wanted!
 */
export interface SessionData {
  WeekendInfo: WeekendInfo;
  SessionInfo: SessionList;
  CameraInfo: CameraInfo;
  RadioInfo: RadioInfo;
  DriverInfo: DriverInfo;
  SplitTimeInfo: SplitTimeInfo;
  CarSetup: CarSetupInfo;
}
