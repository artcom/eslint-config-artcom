# Deprecated: This package has been deprecated in favor of standard rules like `eslint:recommended`

# ESLint configurations used at ART+COM

## Usage

- Install package and peer dependencies: `npm install --save-dev eslint-config-artcom eslint eslint-plugin-import`
- Pick a configuration
- Configure ESLint, e.g. using `.eslintrc.json`: `{ "extends": "<config>" }`

## Configurations

This package provides two different configurations:

### Base Configuration

Base configuration for ES2015 projects. Mainly used in back end projects.

```json
{ "extends": "artcom" }
```

### Mocha Configuration

For unit tests using Mocha.

```json
{ "extends": "artcom/mocha" }
```
