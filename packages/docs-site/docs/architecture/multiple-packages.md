# Packages

## Why multiple packages?

The goal of the `irsdk-node` project is to enable people to write high quality applications using iRacing data. Part of that is is providing access to building blocks that can be used in a way that makes sense for the given project.

While most will only interact with the `irsdk-node` package, it mostly serves as a wrapper for the two main features of the library:

- Interacting with the native iRacing SDK
- Providing accurate TypeScript types for the iRacing SDK

To maximize flexibility and enable people to write high quality iRacing applications how they want to, these underlying features are available within their own respective npm packages (`@irsdk-node/native` and `@irsdk-node/types`).

## [`irsdk-node`](./irsdk-node/)

The `irsdk-node` package is the main library, which uses `@irsdk-node/native` and `@irsdk-node/types` underneath then exports a batteries-included class that can be used to interact with the SDK with minimal boilerplating. It has some performance optimisations and typing optimisations baked-in, and is intended to have a simplified API.

## [`@irsdk-node/native`](./irsdk-node-native/)

Containing the underlying C++ implementation, `@irsdk-node/native` provides the underlying C++ to Node.js bindings that enable exposing iRacing data to the Node.js runtime. It exposes a class that can be imported and used directly to interact with the iRacing SDK, but has fewer bells-and-whistles than `irsdk-node`. While it contains performance optimisations internally, it does not include more opinionated optimisations that can be found in the wrapper library.

## [`@irsdk-node/types`](./irsdk-node-types/)

The types package serves as a repository for TypeScript types mimicking the native C++ types and structs, and contains all of the fundamental typings as well as more detailed runtime typings for the SDK. It also internally includes a variable cache file that is used to keep the telemetry variable types up to date, and is potentially one of the most complete iRacing SDK telemetry variable lists available.
