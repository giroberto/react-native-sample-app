module.exports = {
  env: {
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
