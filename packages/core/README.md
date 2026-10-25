# @goodgame/core

React + TypeScript components for the Good Game Design System.

## Install

```bash
npm install @goodgame/core
```

## Setup

Import the tokens once in your app's root file:

```ts
import "@goodgame/core/tokens";
```

Load the Inter font (for example from Google Fonts) so typography tokens render as designed.

## Usage

```tsx
import { Button } from "@goodgame/core";

export function Example() {
  return <Button>Save</Button>;
}
```

Component styles are bundled with each component; you don't need to import them separately.

## Component structure

```
src/components/Button/
  Button.tsx          component
  Button.module.css   styles (tokens only, no hard-coded values)
  Button.types.ts     props (names match Figma variant properties)
  Button.stories.tsx  Storybook stories
  Button.mdx          docs page
  Button.test.tsx     tests
  index.ts            public export
```

Docs: https://kartikpd19.github.io/GG-Design-System/
