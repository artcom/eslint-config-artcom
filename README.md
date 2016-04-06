# ESLint Configurations used at ART+COM

## Usage

* Install package: `npm install --save-dev eslint-config-artcom`
* Pick a configuration
* Configure ESLint, e.g. using `.eslintrc.json`: `{ "extends": "<config>" }`

## Configurations

This package provides three different configurations:

### Base Configuration

Base configuration for ES2015 projects. Mainly used in back end projects.

```json
{ "extends": "artcom" }
```

### React Configuration

Configuration for front end projects using React.

```json
{ "extends": "artcom/react" }
```

### Mocha Configuration

For unit tests using Mocha.

```json
{ "extends": "artcom/mocha" }
```
