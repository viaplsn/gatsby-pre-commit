const path = require("path");

const buildPrettierCommand = () => `npm run prettier`;

const buildTypescriptCommand = () => `npm run typecheck`;

const buildEslintCommand = () => `npm run lint:fix`;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    buildPrettierCommand,
    buildTypescriptCommand,
    buildEslintCommand,
  ],
};
