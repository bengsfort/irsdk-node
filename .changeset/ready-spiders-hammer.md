---
"@irsdk-node/native": major
---

Updated internal iRacing SDK version to latest (`1.20`).

BREAKING CHANGE:

With the 1.20 SDK iRacing updated how the session string is formatted, from UTF-8 to configurable between UTF-8 and ISO-8859-1 (latin1 in Node.js), with ISO-8859-1 being the default. Since this character set is more limited than UTF-8, this had caused some bugs with how characters are represented in player and track names.

WHAT'S CHANGED:

The format of the session data string will be detected automatically when fetching a new session data from the SDK, and exposed via a new `NativeSDK.isUtf8SessionString` property. The `NativeSDK.getSessionData()` function now returns a raw `Buffer` of the YAML session string instead of a string for maximum portability, since the Node-API String wrapper does not support ISO-8859-1 strings. As the data can be passed between native and node as a buffer, this should result in a net positive performance increase as well.

You can mimick the old behaviour by simply using the new property to determine the encoding of the session data string when converting the buffer:

```ts
const buffer = nativeSDK.getSessionData();
const yamlString = buffer.toString(nativeSDK.isUtf8SessionString ? 'utf8' : 'latin1');
```

Special thanks to @hyleon-dev for finding, investigating, and coming up with a working initial fix for this issue!
