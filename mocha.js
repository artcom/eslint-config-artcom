module.exports = {
  extends: require.resolve("./index"),
  env: {
    "mocha": true
  },
  rules: {
    "func-names": 0,
    "no-unused-expressions": 0,
    "prefer-arrow-callback": 0
  }
}
