# ts-nm [![Build Status](https://travis-ci.org/SimonJang/generator-ts-node.svg?branch=master)](https://travis-ci.org/SimonJang/generator-ts-node)

A `Yeoman` generator to scaffold node module with Typescript

# Setup

```
yo ts-nm
```

# Lint

- Runs `tslint`.
- Uses the `tslint-xo` extension.

```
npm run lint
```

# Compile

- Compiles your Typescript code
- Moves the `.js` files to a `/dist` folder

```
npm run build
```

# Test

- Runs the tests
- Runs the test folder with `ava`

```
npm test
```
