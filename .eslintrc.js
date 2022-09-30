module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["eslint:recommended", "react-app", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
};
