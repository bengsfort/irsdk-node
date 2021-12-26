
export interface SessionResultsPosition {
  Position: number;
  ClassPosition: number;
  CarIdx: number;
  Lap: number;
  Time: number;
  FastestLap: number;
  FastestTime: number;
  LastTime: number;
  LapsLed: number;
  LapsComplete: number;
  JokerLapsComplete: number;
  LapsDriven: number;
  Incidents: number;
  ReasonOutId: number;
  ReasonOutStr: string;
}

export interface SessionResultsFastestLap {
  CarIdx: number;
  FastestLap: number;
  FastestTime: number;
}

export interface Session {
  SessionNum: number;
   SessionLaps: string;
   SessionTime: string;
   SessionNumLapsToAvg: number;
   SessionType: string;
   SessionTrackRubberState: string;
   SessionName: string;
   SessionSubType: string;
   SessionSkipped: number;
   SessionRunGroupsUsed: number;
   ResultsPositions: SessionResultsPosition[];
   ResultsFastestLap: SessionResultsFastestLap[];
   ResultsAverageLapTime: number;
   ResultsNumCautionFlags: number;
   ResultsNumCautionLaps: number;
   ResultsNumLeadChanges: number;
   ResultsLapsComplete: number;
   ResultsOfficial: number; // bool?
}
