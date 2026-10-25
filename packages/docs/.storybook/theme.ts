import { create } from "@storybook/theming/create";

// Values mirror @goodgame/style tokens. Storybook's manager UI can't read CSS
// variables, so they are repeated here as literals.
export default create({
  base: "light",
  brandTitle: "Good Game Design System",
  brandUrl: "https://github.com/kartikpd19/GG-Design-System",
  brandImage: "./logo.svg",
  brandTarget: "_self",

  colorPrimary: "#7657cd",
  colorSecondary: "#7657cd",

  appBg: "#f6f7fb",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#d0d4e4",
  appBorderRadius: 8,

  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',

  textColor: "#292929",
  textInverseColor: "#ffffff",
  textMutedColor: "#676879",

  barTextColor: "#676879",
  barSelectedColor: "#7657cd",
  barHoverColor: "#59419a",
  barBg: "#ffffff",

  inputBg: "#ffffff",
  inputBorder: "#c3c6d4",
  inputTextColor: "#292929",
  inputBorderRadius: 4,
});
