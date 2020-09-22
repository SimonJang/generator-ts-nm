# ts-nm ![CI](https://github.com/SimonJang/generator-ts-nm/workflows/CI/badge.svg?branch=master)

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
- Moves the `.js` files to a `/lib` folder

```
npm run build
```

# Test

- Runs the tests
- Runs the test folder with `ava`

```
npm test
```
