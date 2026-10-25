# @goodgame/docs

The Storybook site for the Good Game Design System. Not published to npm.

```bash
yarn storybook          # dev server on :6006
yarn build-storybook    # static build in packages/docs/storybook-static
```

- `.storybook/`: config, brand theme (`theme.ts`), light/dark toolbar, sidebar order
- `src/Introduction.mdx`, `src/GettingStarted.mdx`
- `src/foundations/`: Color, Typography, Spacing, Border radius, Elevation, Iconography
- `src/Catalog.mdx`: card grid of every component (`src/catalog/registry.tsx`)
- `src/Playground.mdx`: live JSX editor with every `@goodgame/core` export in scope

Component stories and MDX live next to the components in `packages/core`.

The sidebar logo is `public/logo.svg` (set as `brandImage` in `.storybook/theme.ts`).

Deployed to GitHub Pages on every push to `main`: https://kartikpd19.github.io/GG-Design-System/
