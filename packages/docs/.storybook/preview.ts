import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "@goodgame/style";
import "./preview.css";
import theme from "./theme";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i },
    },
    docs: { theme, toc: true },
    a11y: { test: "error" },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Getting Started",
          "Foundations",
          ["Color", "Typography", "Spacing", "Border radius", "Elevation", "Iconography"],
          "Catalog",
          "Playground",
          "Components",
        ],
        method: "alphabetical",
      },
    },
  },
  decorators: [
    // Only the light theme is designed. "dark" is wired so components can be
    // checked against it as soon as dark tokens land in @goodgame/style.
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
