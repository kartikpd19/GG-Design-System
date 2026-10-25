import { useEffect, useRef, useState } from "react";
import styles from "./Foundations.module.css";
import {
  colorGroups,
  paletteRamps,
  radiusScale,
  rampSteps,
  spacingScale,
  typeScale,
  type TokenDoc,
} from "./tokenData";

/** Reads the resolved value of a CSS custom property from the rendered element. */
function useTokenValue(token: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (ref.current) {
      setValue(getComputedStyle(ref.current).getPropertyValue(`--${token}`).trim());
    }
  }, [token]);
  return { ref, value };
}

function ColorSwatch({ name, description }: TokenDoc) {
  const { ref, value } = useTokenValue(name);
  return (
    <div className={styles.swatch} ref={ref}>
      <div className={styles.swatchColor} style={{ background: `var(--${name})` }} />
      <div className={styles.swatchMeta}>
        <code className={styles.tokenName}>--{name}</code>
        <span className={styles.tokenValue}>{value}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}

export function ColorTokens() {
  return (
    <>
      {colorGroups.map((group) => (
        <section key={group.title} className={styles.section}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <div className={styles.swatchGrid}>
            {group.tokens.map((t) => (
              <ColorSwatch key={t.name} {...t} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function RampStep({ prefix, step }: { prefix: string; step: number }) {
  const token = `${prefix}-${step}`;
  const { ref, value } = useTokenValue(token);
  return (
    <div
      ref={ref}
      className={styles.rampStep}
      style={{
        background: `var(--${token})`,
        color: step >= 500 ? "var(--fixed-light-color)" : "var(--fixed-dark-color)",
      }}
      title={`--${token} ${value}`}
    >
      <span>{step}</span>
      <span className={styles.rampHex}>{value}</span>
    </div>
  );
}

export function PaletteRamps() {
  return (
    <div className={styles.ramps}>
      {paletteRamps.map((ramp) => (
        <section key={ramp.prefix}>
          <h3 className={styles.groupTitle}>
            {ramp.title} <code className={styles.tokenName}>--{ramp.prefix}-*</code>
          </h3>
          <div className={styles.ramp}>
            {rampSteps.map((step) => (
              <RampStep key={step} prefix={ramp.prefix} step={step} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function TypographyScale() {
  return (
    <>
      {typeScale.map((group) => (
        <section key={group.title} className={styles.section}>
          <h3 className={styles.groupTitle}>{group.title}</h3>
          <div className={styles.table}>
            {group.styles.map((s) => (
              <div key={s.label} className={styles.typeRow}>
                <code className={styles.tokenName}>--font-{s.token}</code>
                <span className={styles.description}>{s.label}</span>
                <p
                  className={styles.typeSample}
                  style={{
                    font: `var(--font-${s.token})`,
                    letterSpacing: `var(--letter-spacing-${s.token}, 0)`,
                    color: s.link ? "var(--link-color)" : undefined,
                    textDecoration: s.link ? "underline" : undefined,
                  }}
                >
                  Impact how teams work across the globe
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function SpacingRow({ name, description }: TokenDoc) {
  const { ref, value } = useTokenValue(name);
  return (
    <div className={styles.scaleRow} ref={ref}>
      <code className={styles.tokenName}>--{name}</code>
      <span className={styles.scaleValue}>
        <span className={styles.spacingBar} style={{ width: `var(--${name})` }} />
        {value}
      </span>
      <span className={styles.description}>{description}</span>
    </div>
  );
}

export function SpacingScale() {
  return (
    <div className={styles.table}>
      {spacingScale.map((t) => (
        <SpacingRow key={t.name} {...t} />
      ))}
    </div>
  );
}

function RadiusSample({ name, description }: TokenDoc) {
  const { ref, value } = useTokenValue(name);
  return (
    <div className={styles.radiusItem} ref={ref}>
      <div className={styles.radiusBox} style={{ borderRadius: `var(--${name})` }}>
        {value}
      </div>
      <code className={styles.tokenName}>--{name}</code>
      <span className={styles.description}>{description}</span>
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className={styles.radiusGrid}>
      {radiusScale.map((t) => (
        <RadiusSample key={t.name} {...t} />
      ))}
    </div>
  );
}
