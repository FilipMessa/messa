const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    "react-native$": "react-native-web"
  };
  return config;
};
