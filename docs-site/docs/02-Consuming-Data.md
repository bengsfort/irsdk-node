# Consuming SDK Data

There are two types of SDK data provided by the iRacing SDK:

- **Session data:** More static information that does not update very often, and primarily provides high-level data regarding the current session (weather, track information, driver information, car information), car setup information, and _"official"_ driver standings.
- **Live data (Telemetry variables):** Dynamic variables that update frequently, most at 60fps. While these include more high-level information such as driver standings and lap counts, it also includes very fine-grained data for the current frame such as throttle position, gear, speed, position on track, etc.

Applications like overlays will primarily use the live data/telemetry variables whereas applications that analyse car information or track information will primarily use session data, but they can be mix-and-matched based on your applications needs.

Both data types require an active connection iRacing, ie, they must be called after [`sdk.waitForData()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#waitfordata) has returned true.

## Session Data

```ts
const sessionData = sdk.getSessionData();
```

The [`sdk.getSessionData()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#getsessiondata) function is the main way to retrieve session data, which returns the entire session data object. There are helper functions for accessing sub-objects, such as [`sdk.getWeekendInfo()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#getweekendinfo) or [`sdk.getDriverInfo()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#getdriverinfo), but these are just syntactic sugar utility functions that call [`sdk.getSessionData()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#getsessiondata) under the hood.

Session Data is provided by iRacing as a large [YAML](https://yaml.org/) string along with an incrementing number indicating the data version. Internally `irsdk-node` will handle parsing the YAML and caching the result as an optimisation, so it is safe to call [`sdk.getSessionData()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#getsessiondata) multiple times without incurring performance penalties.

## Live data (Telemetry variables)

Telemetry variables can be accessed in two ways: retrieving the full variable list or by retrieving a single variable.

```ts
// Retrieve full list.
const telemetryList = sdk.getTelemetry();
const throttlePos = telemetryList.Throttle;

// Retrieve a single value.
const throttlePos = sdk.getTelemetryVariable<number>("Throttle");
```

There are over 400 possible variables available from iRacing which can all change every frame so the telemetry variables are far more volatile than session data.

In cases where you are processing data every frame it is better to use the single-value API ([`sdk.getTelemetryVariable()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#gettelemetryvariable)) for the specific variables that you need instead of calling [`sdk.getTelemetry()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#gettelemetry). The single-value API is far more performant, leading to less overhead. If performance is not an issue, retrieving the entire list is easiest for discoverability of variables but should still be done only once every frame.

### Telemetry variable caching

The iRacing SDK exposes the telemetry variables as a large list, and while we can lookup a variable by it's name it requires performing a linear search of the list to until the variable is found, which is not great for performance. By default, [`sdk.getTelemetryVariable()`](./10-API-Reference/irsdk-node/classes/IRacingSDK.md#gettelemetryvariable) will maintain a cache for requested variables that maps the variable name to it's position in the list, meaning the lookup only needs to be performed once.

This means the performance is much better, however it also means that for long-running applications there is a chance that the cached lookup index might become stale if running over the course of multiple driving sessions. To fix this, you have two options:

1. Reset the telemetry cache whenever you detect a new session.

```ts
let isInSession: boolean;

// Whenever waitForData returns true, it means that the local driver is actively
// connected to an iRacing session, meaning that it is a good baseline indicator.
if (sdk.waitForData()) {
  // If our 'isInSession' variable was false, we have joined a server.
  // This means we can reset our variable cache for this session.
  if (!isInSession) {
    isInSession = true;
    sdk.resetTelemetryVariableCache();
  }

  // ...
} else {
  isInSession = false;
}
```

2. Disable variable lookup caching completely.

```ts
// At runtime:
sdk.useTelemVariableCache = false;

// At instantiation:
const sdk = new IRacingSDK({
  useTelemVariableCache: false,
});
```

You can find more information and more patterns in the [Recipes](./03-Recipes.md) section.
