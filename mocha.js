module.exports = {
  extends: [
    "eslint-config-airbnb/base",
    "./rules/base.json"
    "./rules/mocha.json"
  ].map(require.resolve)
}
