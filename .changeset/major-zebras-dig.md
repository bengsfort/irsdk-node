---
"@irsdk-node/native": minor
---

Adds `iRacingSdkNode::_napi_getTelemetryVarIndex()` native method, exposed as `getTelemetryVariableIndex()`. It accepts a variable name string, and will perform a lookup of the variables index in the internal variable map. When passing a string to `getTelemetryVariable()`, this lookup is performed automatically which results in a slight performance hit since this lookup is a linear search. `getTelemetryVariableIndex()` can be used as an optimisation, where you can cache the index of the variable and use that to fetch the variable by index, which is much more performant.
