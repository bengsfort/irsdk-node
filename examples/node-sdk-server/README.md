# @irsdk-node/example-node-sdk-server

Example node.js server that exposes endpoints for getting data from the SDK. Also
expoeses a websocket connection for receiving real-time updates.

For testing purposes this project is an extremely basic, ESM node.js project to
verify library compatability.

## Usage

1. Clone and run install: `pnpm install`
2. Start the server via `pnpm start`.
2. Join a session on iRacing (online, local, test drive, whatever).
4. Hit the server endpoints to receive real-time state data, or connect via
websocket to receive updates in real-time.

> ❕NOTE: This project was made using pnpm, and makes use of the workspace:^ protocol. To use with any other package manager, just replace the workspace:^ protocol with the latest version.

## Future

This needs to be completed, and the API needs to be documented.
