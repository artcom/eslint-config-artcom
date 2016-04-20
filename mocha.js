module.exports = {
  extends: [
    "airbnb-base",
    require.resolve("./rules/base"),
    require.resolve("./rules/mocha")
  ]
}
