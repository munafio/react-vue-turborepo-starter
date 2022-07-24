const withTM = require("next-transpile-modules")(["react-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
