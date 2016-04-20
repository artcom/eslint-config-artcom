module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "./rules/base",
    "./rules/mocha"
  ].map(require.resolve)
}
