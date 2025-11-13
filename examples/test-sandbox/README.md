# @irsdk-node/test-sandbox

General catch-all sandbox package for implementing generic scripts testing specific aspects of the library, as well as performance testing scripts.

## Usage

1. Clone and run install: `pnpm install`
2. Run the desired script via `pnpm <script>`.

> ❕NOTE: This project was made using pnpm, and makes use of the workspace:^ protocol. To use with any other package manager, just replace the workspace:^ protocol with the latest version.

## Adding new tests

When adding new test scripts to this package, make sure to add a script command in the [`package.json`](./package.json) for easy execution.

Try to ensure all scripts are self-contained; some boilerplate shared utility can be added but in general keep scripts isolated.
