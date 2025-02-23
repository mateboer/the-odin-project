import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import airbnb from "eslint-config-airbnb";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { extends: _ignore, ...airbnbConfig } = airbnb;

/** @type {import('eslint').Linter.Config[]} */
export default [
  airbnbConfig,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
