module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "sonarjs"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:sonarjs/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "no-console": ["error"],
    "sonarjs/cognitive-complexity": ["error", 5],
    "sonarjs/no-identical-conditions": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "function" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    ],
    quotes: ["error", "double", { avoidEscape: true }],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "ignore",
      },
    ],
  },
};
