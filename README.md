# irsdk-node monorepo

> 👋 Looking for the `irsdk-node` package? You can find it [here](./packages/irsdk-node/)!

This monorepo contains all of the packages that make up `irsdk-node`, a node.js wrapper for the iRacing C++ SDK.

This library provides near-1:1 bindings to the native iRacing SDK via a node.js native addon module, allowing you to easily initialize and consume the SDK data from javascript/typescript with full type-safety and type support. All underlying data exposed via the SDK (except for a small handful of telemetry variables, which can be overidden) have types via the [`@irsdk-node/types`](./packages/irsdk-node-types/) package which can either be used directly via npm, or indirectly via [`irsdk-node`](./packages/irsdk-node/).

## Packages

This library is split up into several packages to provide more freedom and to allow the individual features to be used completely independently.

- [irsdk-node](./packages/irsdk-node): The main `irsdk-node` package. Provides a ready-made SDK wrapper for easy SDK interaction.
- [@irsdk-node/types](./packages/irsdk-node-types): Package containing TypeScript implementations of the native types within the iRacing SDK. Consumed by `irsdk-node`, but can be used independently.
- [@irsdk-node/native](./packages/irsdk-node-native): Package containing the native node.js addon that implements the bindings and interacts with the SDK. Consumed by `irsdk-node`, but can be used independently.

> ⚠️ It's recommended to use the irsdk-node package for easy usage, which will include the types and native module automatically. If you have more custom needs or just want types/native bindings on their own, then feel free to use them directly without the main package.

## Examples

A collection of example scripts and apps that show how to use the library exist in the [`examples/`](./examples/) directory. These can be run by cloning the repo and then navigating to the desired example and running the correct start command, usually `pnpm run start`.

More of these examples will be added in the future, as well as independently downloadable versions.

## Monorepo management

Due to the This monorepo uses [pnpm](https://pnpm.io/workspaces) for workspace management and [changesets](https://github.com/changesets/changesets) for version/changelog management. This allows for a pleasant monorepo experience where during local development, all packages can reference the local versions of their dependencies while having reliable and managed versioning.

### Versioning

Whenever a new feature, bug fix, or tooling change is complete the a changeset describing it should be created:

```shell
$ pnpm run changes:add
```

This can be run from the root of the monorepo, and the `.changeset/*.yaml` file that it creates should be committed. When the PR including this changeset lands in `main`, CI will detect the changeset and either create a new _versioning pr_ or update an existing one. This PR will keep track of all the changesets between releases, and have `package.json` updates for all packages affected by the changesets (as well as their dependencies).

### Releasing

Once a changesets _versioning pr_ is merged, all packages will automatically be updated to their latest versions and a release can be made. This can be done manually via `pnpm publish <...>` or even `changeset publish`, but the best way to release is to trigger the [release workflow](https://github.com/bengsfort/irsdk-node/actions/workflows/trigger-release.yaml) on github actions. Make sure to select all affected packages when releasing!

This is especially important for `@irsdk-node/native`, as this workflow will spin up a matrix of jobs to pre-build the node.js C++ module on a number of different platforms and architectures. These pre-built binaries will then be downloaded by the release job so that they are included in the npm release.
