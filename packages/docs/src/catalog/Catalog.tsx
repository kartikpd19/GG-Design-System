import styles from "./Catalog.module.css";
import { catalog } from "./registry";

export function Catalog() {
  if (catalog.length === 0) {
    return <p className={styles.empty}>No components have been published yet.</p>;
  }

  const sorted = [...catalog].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul className={styles.grid}>
      {sorted.map((entry) => (
        <li key={entry.name}>
          <a className={styles.card} href={`?path=/docs/${entry.docsId}`} target="_top">
            {/* React 18 has no typed `inert`; spread keeps thumbnails out of the tab order */}
            <div className={styles.thumbnail} aria-hidden {...{ inert: "" }}>
              {entry.preview}
            </div>
            <div className={styles.meta}>
              <span className={styles.name}>{entry.name}</span>
              <span className={styles.description}>{entry.description}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
