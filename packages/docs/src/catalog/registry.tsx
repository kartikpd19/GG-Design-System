import type { ReactNode } from "react";

export interface CatalogEntry {
  name: string;
  description: string;
  /** Storybook docs id, e.g. "components-button--docs" */
  docsId: string;
  /** Live thumbnail rendered from the real component */
  preview: ReactNode;
}

// Add an entry here whenever a component lands in @goodgame/core.
export const catalog: CatalogEntry[] = [];
