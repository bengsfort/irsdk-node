/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Import from JS so that we can type the API in a nicer way (without aliases)
// The alternative would be to somehow get types generated, or use aliases to
// fake a module and then define that module... but those are gross, so no thanks
const nodePath = require('node:path');
const { warn } = require('node:console');
const MockSdk = require('./dist/MockSDK');

let sdkBinding;
let isMocked;

try {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const binding = require('node-gyp-build')(nodePath.join(__dirname, '.'));
  isMocked = binding.mockedSdk;

  if (isMocked) {
    sdkBinding = MockSdk;
  } else {
    sdkBinding = binding.iRacingSdkNode;
  }
} catch (err) {
  warn('Failed to load native iRacing SDK module. Loading mock SDK instead.');
  isMocked = true;
  sdkBinding = MockSdk;
}

module.exports = {
  NativeSDK: sdkBinding,
  mockedSdk: isMocked,
};
