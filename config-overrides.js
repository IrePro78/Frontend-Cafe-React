const { override } = require("customize-cra");
const {
  aliasDangerous,
  configPaths,
} = require("react-app-rewire-alias/lib/aliasDangerous");
console.log()
module.exports = {
  webpack: override(aliasDangerous(configPaths("./tsconfig.paths.json"))),
};

