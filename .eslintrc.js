module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },

  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "react/prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "no-console": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
