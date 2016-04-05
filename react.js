module.exports = {
  extends: [
    "eslint-config-airbnb",
    "./rules/base.json",
    "./rules/react.json"
  ].map(require.resolve)
}
