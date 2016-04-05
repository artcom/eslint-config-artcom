module.exports = {
  extends: [
    "eslint-config-airbnb/base",
    "./rules/base.json"
  ].map(require.resolve)
}
