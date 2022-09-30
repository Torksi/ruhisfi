module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "import/extensions": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "dot-notation": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": [2, { custom: "ignore" }],
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/anchor-is-valid": [
      "off",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "prettier/prettier": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "no-bitwise": 2,
    "no-param-reassign": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unescaped-entities": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};
