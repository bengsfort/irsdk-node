export interface TireInfo {
  ColdPressure: string;
  LastHotPressure: string;
  LastTempsOMI: string;
  TreadRemaining: string;
}

export interface TireCompoundInfo {
  TireCompound: string;
}

// Is this for everything, or just for the W12?
export interface AeroPackageInfo {
  DownforceTrim: string;
  FrontFlapOffset: string;
  RearWingGurney: string;
}

export interface AeroCalculatorInfo {
  FrontRhAtSpeed: string;
  RearRhAtSpeed: string;
  AeroBalance: string;
  DownforceToDrag: string;
}

export interface FrontAeroInfo {
  WingFlapConfig: string;
  WingMainplaneExt: string;
  WingWicker: string;
  WingEndplateAngle: string;
  WingAngle: string;
}

export interface BodyAeroInfo {
  RadiatorInlet: string;
  TrailingEdgeWicker: string;
  BargeBoards: string;
  Underwing: string;
}

export interface RearAeroInfo {
  WingFlapConfig: string;
  WingAngle: string;
  WingWicker: string;
}

export interface TiresAeroInfo {
  TireCompound: TireCompoundInfo;
  LeftFront: TireInfo;
  LeftRear: TireInfo;
  RightFront: TireInfo;
  RightRear: TireInfo;
  AeroPackage?: AeroPackageInfo;
  FrontAero: FrontAeroInfo;
  BodyAero: BodyAeroInfo;
  RearAero: RearAeroInfo;
  AeroCalculator: AeroCalculatorInfo;
}

export interface ChassisCornerInfo {
  CornerWeight: string;
  Camber: string;
  ToeIn?: string;
  ColdPressure?: string;
  LastHotPressure?: string;
  LastTempsOMI?: string;
  TreadRemaining?: string;
  RideHeight?: string;
  SpringPerchOffset?: string;
  BumpStiffness?: string;
  ReboundStiffness?: string;
  PushrodLength?: string;
  SpringRate?: string;
  Caster?: string;
}

export interface ChassisFrontInfo {
  ToeIn?: string;
  CrossWeight?: string;
  AntiRollBar?: string;
  // W12 stuff
  TransparentHalo?: number; // bool
  WeightDist?: string;
  HeaveRate?: string;
  RollRate?: string;
  RideHeight?: string;
  RdSpring?: string;
  RdSpringGap?: string;
  BarDiameter?: string;
  BarBlades?: string;
  BarBladePosition?: number;
  DropLinkPosition?: string;
  ArbPreload?: string;
}

export interface ChassisRearInfo {
  FuelLevel: string;
  ToeIn?: string;
  AntiRollBar: string;
  // W12 stuff
  HeaveRate?: string;
  RollRate?: string;
  RideHeight?: string;
  RdSpring?: string;
  RdSpringGap?: string;
  WeightJacker: number;
}

export interface ChassisGeneralInfo {
  Wheelbase: string;
  BrakePressure: string;
  BrakePressureBias: string;
  SteeringPinion: string;
  SteeringOffset: string;
  NoseWeight: string;
  CrossWeight: string;
}

export interface RearArbInfo {
  ArbDiameter: string;
  ArbDropLinkPosition: string;
  ArbBlades: number;
  ArbPreload: string;
}

export interface GraphicsInfo {
  VinylWrapOnWheelRims: number;
  VinylWrapOnSuspension: number;
}

export interface ChassisInfo {
  General: ChassisGeneralInfo;
  Front: ChassisFrontInfo;
  LeftFront: ChassisCornerInfo;
  LeftRear: ChassisCornerInfo;
  RightFront: ChassisCornerInfo;
  RightRear: ChassisCornerInfo;
  Rear: ChassisRearInfo;
  RearArb: RearArbInfo;
  Graphics: GraphicsInfo;
}

export interface DifferentialInfo {
  Preload: string;
  Entry: string;
  Middle: string;
  HighSpeed: string;
}

export interface PowerUnitConfig {
  MguKDeployMode: string;
  EngineBraking: string;
}

export interface BrakeSystemConfig {
  BaseBrakeBias: string;
  DynamicRamping: string;
  BrakeMigration: string;
  TotalBrakeBias: string;
  BrakeMagicModifier: number;
}

export interface DriveBrakeInfo {
  Differential: DifferentialInfo;
  PowerUnitConfig: PowerUnitConfig;
  BrakeSystemConfig: BrakeSystemConfig;
}

export interface DamperSettings {
  LowSpeedComp: string;
  HighSpeedComp: string;
  LowSpeedRebound: string;
  HighSpeedRebound: string;
}

export interface DamperInfo {
  LeftFrontDamper: DamperSettings;
  LeftRearDamper: DamperSettings;
  RightFrontDamper: DamperSettings;
  RightRearDamper: DamperSettings;
}

export interface DrivetrainInfo {
  Engine: {
    EngineMapSetting: string;
    TurboBoostPressure: string;
  };
  Gearbox: {
    FirstGear: string;
    SecondGear: string;
    ThirdGear: string;
    FourthGear: string;
    FifthGear: string;
    SixthGear: string;
    FinalDrive: string;
  };
  Differential_RcOnly: {
    ClutchPlates: number;
    Preload: string;
    RampAngles: string;
  };
}

export interface CarSetupInfo {
  UpdateCount: number;
  Suspension?: ChassisInfo;
  TiresAero?: TiresAeroInfo;
  Chassis?: ChassisInfo;
  DriveBrake?: DriveBrakeInfo;
  Dampers: DamperInfo;
  Drivetrain?: DrivetrainInfo;
}
