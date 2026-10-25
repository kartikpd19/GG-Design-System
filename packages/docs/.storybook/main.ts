import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../../core/src/**/*.mdx",
    "../../core/src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      // Hide the grid/background, outline and measure toolbar buttons.
      options: { backgrounds: false, outline: false, measure: false },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { defaultName: "Docs" },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      resolve: {
        // Develop against source so component edits hot-reload without a build.
        alias: {
          "@goodgame/core": fileURLToPath(new URL("../../core/src/index.ts", import.meta.url)),
        },
      },
      css: {
        modules: { generateScopedName: "gg-[local]_[hash:base64:5]" },
      },
    }),
};

export default config;
