# @goodgame/style

Design tokens for the Good Game Design System, shipped as CSS custom properties.

## Install

```bash
npm install @goodgame/style
```

You usually don't need this package directly: `@goodgame/core` depends on it and re-exports it as `@goodgame/core/tokens`.

## Usage

```ts
import "@goodgame/style"; // all tokens
```

```css
.card {
  background: var(--primary-background-color);
  color: var(--primary-text-color);
  padding: var(--space-16);
  border-radius: var(--border-radius-medium);
  font: var(--font-text2-normal);
}
```

## Token files

| File             | Contents                                                        |
| ---------------- | --------------------------------------------------------------- |
| `colors.css`     | Palette ramps (`--color-purple-500`…) and semantic color tokens |
| `typography.css` | `--font-h1-bold` … `--font-text3-normal`, letter-spacing        |
| `spacing.css`    | `--space-2` … `--space-80`                                      |
| `radius.css`     | `--border-radius-small/medium/large`                            |
| `shadows.css`    | Elevation (pending)                                             |
| `focus.css`      | Focus ring used by interactive components                       |

Only a light theme exists today. Theme switching uses `[data-theme="light" | "dark"]` on any ancestor.

Tokens are kept in sync with Figma by `yarn sync-tokens` (see `/scripts`).
