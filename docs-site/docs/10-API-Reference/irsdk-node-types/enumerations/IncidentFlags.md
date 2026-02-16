Defined in: [defines.ts:240](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L240)

Bit flags for describing incidents. These can be used to extract info about
an incident in the sim.

- The first byte indicates the incident type. ('Report{type}' values)
- Second byte indicates the penalty. ('Penalty{type}' values)

To separate these, use a mask from the `IncidentFlagMask` enum.

Represents irsdk_IncidentFlags

## Enumeration Members

### NoReport

> **NoReport**: `0`

Defined in: [defines.ts:241](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L241)

***

### PenaltyFourX

> **PenaltyFourX**: `1024`

Defined in: [defines.ts:271](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L271)

4x

***

### PenaltyOneX

> **PenaltyOneX**: `512`

Defined in: [defines.ts:267](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L267)

1x

***

### PenaltyTwoX

> **PenaltyTwoX**: `768`

Defined in: [defines.ts:269](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L269)

2x

***

### PenaltyZeroX

> **PenaltyZeroX**: `256`

Defined in: [defines.ts:265](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L265)

0x

***

### ReportCollisionWithCar

> **ReportCollisionWithCar**: `8`

Defined in: [defines.ts:260](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L260)

"Car Contact (4x)"

***

### ReportCollisionWithWorld

> **ReportCollisionWithWorld**: `5`

Defined in: [defines.ts:254](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L254)

"Contact (2x)"

***

### ReportCollisionWithWorldOngoing

> **ReportCollisionWithWorldOngoing**: `6`

Defined in: [defines.ts:256](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L256)

not currently sent

***

### ReportContactWithCar

> **ReportContactWithCar**: `7`

Defined in: [defines.ts:258](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L258)

"Car Contact (0x)"

***

### ReportContactWithWorld

> **ReportContactWithWorld**: `4`

Defined in: [defines.ts:252](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L252)

"Contact (0x)"

***

### ReportOffTrack

> **ReportOffTrack**: `2`

Defined in: [defines.ts:248](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L248)

"Off Track (1x)"

***

### ReportOffTrackOngoing

> **ReportOffTrackOngoing**: `3`

Defined in: [defines.ts:250](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L250)

not currently sent

***

### ReportOutOfControl

> **ReportOutOfControl**: `1`

Defined in: [defines.ts:246](https://github.com/bengsfort/irsdk-node/blob/a2b43f2f04d651e31708a537154c2c9959148812/packages/irsdk-node-types/src/defines.ts#L246)

"Loss of Control (2x)"
