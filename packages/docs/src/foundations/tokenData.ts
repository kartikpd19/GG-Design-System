// Token names + Figma descriptions shown on the Foundations pages.
// Values are not duplicated here: every swatch renders `var(--token)` and reads
// the computed value, so docs always match @goodgame/style.

export interface TokenDoc {
  name: string;
  description: string;
}

export interface TokenGroup {
  title: string;
  tokens: TokenDoc[];
}

export const colorGroups: TokenGroup[] = [
  {
    title: "Primary colors",
    tokens: [
      { name: "primary-color", description: "Use this to emphasis main ui components" },
      { name: "primary-hover-color", description: "Use as a hover on primary color" },
      {
        name: "primary-selected-color",
        description: "Use this to indicate selected state of primary items",
      },
      {
        name: "primary-selected-hover-color",
        description: "Use this to indicate hover selected state of brand items",
      },
      {
        name: "primary-highlighted-color",
        description: "Use this to indicate selected state of primary items",
      },
    ],
  },
  {
    title: "Brand",
    tokens: [
      { name: "brand-color", description: "Use this to emphasis main brand CTA" },
      { name: "brand-hover-color", description: "Use as a hover on brand color" },
      {
        name: "brand-selected-color",
        description: "Use this to indicate selected state of brand items",
      },
      {
        name: "brand-selected-hover-color",
        description: "Use this to indicate hover selected state of brand items",
      },
    ],
  },
  {
    title: "Text colors",
    tokens: [
      { name: "primary-text-color", description: "Use for default text color" },
      {
        name: "secondary-text-color",
        description: "Use when you need text with lesser importance",
      },
      {
        name: "text-color-on-inverted",
        description: "Inverted text color (opposite of primary text color)",
      },
      { name: "text-color-on-primary", description: "Use for text on primary color" },
      { name: "disabled-text-color", description: "Use as text in disabled components" },
    ],
  },
  {
    title: "Utility",
    tokens: [
      { name: "ui-border-color", description: "Border color for ui elements and components" },
      {
        name: "layout-border-color",
        description: "Border color for general layout and separators",
      },
      { name: "placeholder-color", description: "Use for placeholder text in inputs fields" },
      { name: "icon-color", description: "Default color for icons" },
      { name: "link-color", description: "Use only for links" },
      {
        name: "fixed-dark-color",
        description: "Use as color that should remain dark in all themes",
      },
      {
        name: "fixed-light-color",
        description: "Use as color that should remain light in all themes",
      },
    ],
  },
  {
    title: "Backgrounds",
    tokens: [
      { name: "inverted-color-background", description: "Opposite of primary background color" },
      { name: "primary-background-color", description: "Primary background color" },
      { name: "primary-background-hover-color", description: "Use as hover color" },
      { name: "secondary-background-color", description: "Secondary background color" },
      { name: "allgrey-background-color", description: "Secondary background color" },
      {
        name: "ui-background-color",
        description: "Background color for ui elements and components",
      },
      {
        name: "disabled-background-color",
        description: "Use as background for disabled elements",
      },
      {
        name: "primary-surface-color",
        description: "Use this as the surface of the main layout appearance",
      },
    ],
  },
  {
    title: "Severity",
    tokens: [
      { name: "positive-color", description: "Use to indicate something positive" },
      { name: "positive-color-hover", description: "Use as hover color on positive color" },
      {
        name: "positive-color-selected",
        description: "Use as selected indication for a positive color",
      },
      {
        name: "positive-color-selected-hover",
        description: "Use as selected hover indication for a positive color",
      },
      { name: "negative-color", description: "Use to indicate something negative" },
      { name: "negative-color-hover", description: "Use as hover color on negative color" },
      {
        name: "negative-color-selected",
        description: "Use as selected indication for a negative color",
      },
      {
        name: "negative-color-selected-hover",
        description: "Use as selected hover indication for a negative color",
      },
      { name: "warning-color", description: "Use for warning colors" },
      { name: "warning-color-hover", description: "Use as hover indication for a warning color" },
      {
        name: "warning-color-selected",
        description: "Use as selected indication for a warning color",
      },
      {
        name: "warning-color-selected-hover",
        description: "Use as selected hover indication for a warning color",
      },
      {
        name: "private-color",
        description: "Use to indicate that something is private (board, icons...)",
      },
    ],
  },
];

export const paletteRamps: { title: string; prefix: string }[] = [
  { title: "Purple (primary)", prefix: "color-purple" },
  { title: "Negative", prefix: "color-negative" },
  { title: "Positive", prefix: "color-positive" },
  { title: "Neutral", prefix: "color-neutral" },
  { title: "Content (text)", prefix: "color-content" },
];

export const rampSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export interface TypeStyle {
  token: string;
  label: string;
  link?: boolean;
}

export const typeScale: { title: string; styles: TypeStyle[] }[] = [
  {
    title: "Heading 1",
    styles: ["bold", "medium", "normal", "light"].map((w) => ({
      token: `h1-${w}`,
      label: `H1 (32px) / ${w[0].toUpperCase()}${w.slice(1)}`,
    })),
  },
  {
    title: "Heading 2",
    styles: ["bold", "medium", "normal", "light"].map((w) => ({
      token: `h2-${w}`,
      label: `H2 (24px) / ${w[0].toUpperCase()}${w.slice(1)}`,
    })),
  },
  {
    title: "Heading 3",
    styles: ["bold", "medium", "normal", "light"].map((w) => ({
      token: `h3-${w}`,
      label: `H3 (18px) / ${w[0].toUpperCase()}${w.slice(1)}`,
    })),
  },
  {
    title: "Text 1",
    styles: [
      { token: "text1-bold", label: "Text1 (16px) / Bold" },
      { token: "text1-medium", label: "Text1 (16px) / Medium" },
      { token: "text1-normal", label: "Text1 (16px) / Normal" },
      { token: "text1-normal", label: "Text1 (16px) / Normal-link", link: true },
    ],
  },
  {
    title: "Text 2",
    styles: [
      { token: "text2-bold", label: "Text2 (14px) / Bold" },
      { token: "text2-medium", label: "Text2 (14px) / Medium" },
      { token: "text2-normal", label: "Text2 (14px) / Normal" },
      { token: "text2-normal", label: "Text2 (14px) / Normal-link", link: true },
    ],
  },
  {
    title: "Text 3",
    styles: [
      { token: "text3-medium", label: "Text3 (12px) / Medium" },
      { token: "text3-normal", label: "Text3 (12px) / Normal" },
      { token: "text3-normal", label: "Text3 (12px) / Normal-link", link: true },
    ],
  },
];

export const spacingScale: TokenDoc[] = [
  { name: "space-2", description: "Use for small compact components" },
  { name: "space-4", description: "Use for small compact components" },
  { name: "space-8", description: "Use for small compact components" },
  { name: "space-12", description: "Use for medium, less condense components" },
  { name: "space-16", description: "Use for larger components or a condense layout" },
  { name: "space-20", description: "Use for larger pieces of UI, patterns, or a condense layout" },
  { name: "space-24", description: "Use for larger pieces of UI, patterns, or layout" },
  { name: "space-32", description: "Use for patterns, or a layout" },
  { name: "space-40", description: "Use for patterns, or a layout" },
  { name: "space-48", description: "Use for patterns, or an increased spacing layout" },
  { name: "space-64", description: "Use for patterns, or an increased spacing layout" },
  { name: "space-80", description: "Use for patterns, or an increased spacing layout" },
];

export const elevationScale: (TokenDoc & { size: number })[] = [
  { name: "box-shadow-small", description: "Small elements", size: 40 },
  { name: "box-shadow-medium", description: "Medium elements", size: 56 },
  { name: "box-shadow-large", description: "Large elements", size: 104 },
  { name: "box-shadow-extra-large", description: "Extra large elements", size: 160 },
];

export const radiusScale: TokenDoc[] = [
  {
    name: "border-radius-small",
    description: "Forms, buttons, checkboxes, selected marks and tooltips",
  },
  {
    name: "border-radius-medium",
    description: "Dropdowns, popovers, attention boxes and updates",
  },
  { name: "border-radius-large", description: "Popups" },
];
