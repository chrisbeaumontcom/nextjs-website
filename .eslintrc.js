module.exports = {
  env: {
    es6: true
  },
  extends: "eslint:recommended",
  globals: { React: "writable" },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: { "react/react-in-jsx-scope": "off" },
  extends: ["eslint:recommended", "plugin:react/recommended"]
};
