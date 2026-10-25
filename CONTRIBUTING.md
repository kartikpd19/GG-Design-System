# Contributing to Good Game Design System

Thanks for helping out! This guide covers local setup, conventions and how to get a change merged.

## Setup

Requirements: Node (see `.nvmrc`) and Yarn 1 (`corepack enable`).

```bash
git clone https://github.com/kartikpd19/GG-Design-System.git
cd GG-Design-System
yarn install
yarn storybook        # http://localhost:6006
```

| Command            | What it does                                   |
| ------------------ | ---------------------------------------------- |
| `yarn storybook`   | Run the docs site locally                      |
| `yarn build`       | Build every package                            |
| `yarn lint`        | ESLint + Prettier check                        |
| `yarn typecheck`   | TypeScript in every package                    |
| `yarn test`        | Vitest in every package                        |
| `yarn sync-tokens` | Compare Figma variables with `@goodgame/style` |

## Adding a component

1. **It must exist in Figma first.** No speculative components.
2. Create `packages/core/src/components/<Name>/` with:
   `<Name>.tsx`, `<Name>.module.css`, `<Name>.types.ts`, `<Name>.stories.tsx`, `<Name>.mdx`, `<Name>.test.tsx`, `index.ts`.
3. **Prop names match the Figma variant property names exactly**, camelCased for the prop key (Figma `Size` → `size`) and keeping Figma's option values.
4. **Tokens only.** Use `var(--…)` from `@goodgame/style` for every color, size, space, radius and font.
5. **Accessibility:** native elements first, correct roles and aria attributes, full keyboard support, `:focus-visible` ring using `--focus-ring-*`.
6. Stories: `Overview`, one story per variant, `Sizes`, `States`, `Playground` (controls).
7. MDX page: description, import, props (`<ArgTypes>`), variants, do's and don'ts, accessibility, related components.
8. Export it from `packages/core/src/index.ts` and add it to `packages/docs/src/catalog/registry.tsx`.

## Commits and PRs

- Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat(button): add loading state`). Release versions are derived from them.
- Fill in the PR template checklist.
- CI must pass: lint, typecheck, tests, build.

## Releasing

Maintainers run the **Release** workflow from the Actions tab. It versions changed packages with Lerna and publishes them to npm.
