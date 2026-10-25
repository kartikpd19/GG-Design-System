import type { Preview } from "@storybook/react";
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
};

export default preview;
