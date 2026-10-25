import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import * as GoodGame from "@goodgame/core";
import styles from "./Playground.module.css";

const defaultCode = `// Every @goodgame/core export is in scope.
// Edit the JSX below to render components live.
<div style={{ display: "flex", gap: "var(--space-8)" }}>
  <span style={{ font: "var(--font-text1-normal)" }}>
    Hello from Good Game
  </span>
</div>`;

export function Playground({ code = defaultCode }: { code?: string }) {
  return (
    <LiveProvider code={code} scope={{ ...GoodGame }}>
      <div className={styles.container}>
        <div className={styles.preview}>
          <LivePreview />
        </div>
        <div className={styles.editor}>
          <LiveEditor aria-label="JSX editor" />
        </div>
        <LiveError className={styles.error} />
      </div>
    </LiveProvider>
  );
}
