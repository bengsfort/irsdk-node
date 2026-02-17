# [irsdk-node.bengsfort.dev](https://irsdk-node.bengsfort.dev)

This is a documentation site for the `irsdk-node` package built with [docusaurus.io](https://docusaurus.io), which is deployed via [gh-pages](https://docs.github.com/en/pages) and contains an automatically generated API reference via [typedoc](https://typedoc.org).

## Local quickstart

```bash
# Install
pnpm install

# If you haven't built type definitions for the library before, do so:
pnpm run --filter "../packages/**" build:types

# Generate API references
pnpm run docs:gen

# Start the site locally
pnpm start
```

## Structure

This site is strictly a docs site, and does not include any of the other default docusaurus features. The root level of the [docs/](./docs/) folder includes normal docs that focus on providing the key information needed to use the `irsdk-node` library effectively. These are hand-written and must be maintained.

Via the `pnpm docs:gen` command, an API Reference for all packages is created within the docs folder before each deployment. This reference is created by using [typedoc](https://typedoc.org) to generate markdown from the [tsdoc](https://tsdoc.org) comments within each package.

When generating the reference, each package will run typedoc to generate a json file describing the documentation outline, which then gets merged by this packages [typedoc config](./typedoc.json) and rendered to markdown within the API reference documentation folder. There are additional cleanup actions that are taken, which can be found in the [`cleanup-generated-docs.ts`](./cleanup-generated-docs.ts) script.

## Deployment

Deployment happens automatically via github actions.

Each PR will check if there have been changes to the main packages as well as the documentation site source, and will verify that the site can still build without error. Once merged, a full rebuild will occur and it will be deployed to github pages. You can find the workflows here:

- [PR build workflow](/.github/workflows/test-build-docs.yaml)
- [Deployment workflow](/.github/workflows/deploy-docs-site.yaml)
