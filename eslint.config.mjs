import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      "node_modules/**",
      "docs/.vitepress/dist/**",
      "docs/.vitepress/cache/**",
    ],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Vue files configuration
  {
    files: ["**/*.vue"],
    extends: [...pluginVue.configs["flat/recommended"]],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      // Allow single-word component names (VitePress convention)
      "vue/multi-word-component-names": "off",
    },
  },

  // Project-specific TypeScript rules
  {
    files: ["**/*.{ts,mts,vue}"],
    rules: {
      // Warn instead of error for explicit any (documentation project)
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
);
