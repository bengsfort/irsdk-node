# @irsdk-node/example-node-dump-sdk-data

Example node.js script that simply invokes the SDK, and then outputs all data to
.json files in the output directory (default: `./out`). Good starting point for
seeing what data is available from the SDK.

For testing purposes this project is an extremely basic, commonJS node.js project.
This is outdated and you should opt to use more modern module resolution solutions,
like esm, but this project exists as is to test commonJS compat.

## Usage

1. Clone and run install: `pnpm install`
2. Join a session on iRacing (online, local, test drive, whatever).
3. Once connected, run the script via `pnpm start`.
    a. Alternatively, you can run it manually via `node ./src/main.js <path/to/outdir>`
4. Session and telemetry data will be written to `.json` files in the outdir.

> ❕NOTE: This project was made using pnpm, and makes use of the workspace:^ protocol. To use with any other package manager, just replace the workspace:^ protocol with the latest version.

## Future

This project is just a copy of an old test script, and is not representative of 
production-level code. It will be replaced in due time.
