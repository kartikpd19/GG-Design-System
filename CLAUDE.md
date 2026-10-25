# CLAUDE.md

Conventions for AI tools working in this repo.

## Project

Good Game Design System: a Lerna + Yarn 1 workspaces monorepo modeled on mondaycom/vibe.

- `packages/core`: `@goodgame/core`, React 18 + TypeScript components, CSS Modules
- `packages/style`: `@goodgame/style`, tokens as CSS custom properties
- `packages/icons`: `@goodgame/icons`, icons (not populated yet)
- `packages/docs`: Storybook 8 app (aliases `@goodgame/core` to source)

Source of truth: Figma file `2C5ebJzU146r07jIOPVQxk` (GG Design System V1.3).

## Rules

- **Only build what exists in Figma.** If something in Figma is ambiguous, ask; don't guess.
- **Prop names = Figma variant property names** (camelCased keys, Figma option values kept).
- **No hard-coded values in component CSS.** Use `var(--token)` only. Add a token to `@goodgame/style` if one is missing, and only if it exists in Figma.
- Where a Figma variable and its documented swatch disagree, the **swatch wins**.
- Only a **light theme** exists. Don't invent dark values.
- All typography is **Inter**.
- Accessibility: native elements, keyboard support, `:focus-visible` ring via `--focus-ring-*`, aria attributes.

## Component folder

```
packages/core/src/components/<Name>/
  <Name>.tsx  <Name>.module.css  <Name>.types.ts
  <Name>.stories.tsx  <Name>.mdx  <Name>.test.tsx  index.ts
```

Stories: Overview, one per variant, Sizes, States, Playground. MDX: description, import, ArgTypes, variants, do's/don'ts, accessibility, related.
After adding a component: export from `packages/core/src/index.ts` and register in `packages/docs/src/catalog/registry.tsx`.

## Commands

`yarn storybook`, `yarn lint`, `yarn typecheck`, `yarn test`, `yarn build`, `yarn sync-tokens`
