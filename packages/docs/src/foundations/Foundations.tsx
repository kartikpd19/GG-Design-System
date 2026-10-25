import { useEffect, useRef, useState } from "react";
import styles from "./Foundations.module.css";
import {
  colorGroups,
  elevationScale,
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
        <span className={styles.tokenValue}>{value.toUpperCase()}</span>
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
          <div className={`sb-unstyled ${styles.swatchGrid}`}>
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
          <div className={`sb-unstyled ${styles.ramp}`}>
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
          <div className={`sb-unstyled ${styles.table}`}>
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
    <div className={`sb-unstyled ${styles.table}`}>
      {spacingScale.map((t) => (
        <SpacingRow key={t.name} {...t} />
      ))}
    </div>
  );
}

function ElevationSample({ name, description, size }: TokenDoc & { size: number }) {
  const { ref, value } = useTokenValue(name);
  return (
    <div className={styles.elevationCell} ref={ref}>
      <div
        className={styles.elevationBox}
        style={{ width: size, height: size, boxShadow: `var(--${name})` }}
      />
      <span className={styles.description}>{description}</span>
      <code className={styles.tokenName}>--{name}</code>
      <span className={styles.tokenValue}>{value}</span>
    </div>
  );
}

export function ElevationScale() {
  return (
    <div className={`sb-unstyled ${styles.elevationGrid}`}>
      {[...elevationScale].reverse().map((t) => (
        <ElevationSample key={t.name} {...t} />
      ))}
    </div>
  );
}

function RadiusSample({
  name,
  description,
  size,
  lens,
}: TokenDoc & { size: number; lens: number }) {
  const { ref, value } = useTokenValue(name);
  // Box sits down-right of the magnifier, as on the Figma page.
  const offset = Math.round(lens * 0.45);
  return (
    <div className={styles.radiusItem} ref={ref}>
      <span className={styles.radiusLabel}>{description}</span>
      <div className={styles.radiusFigure} style={{ width: size + offset, height: size + offset }}>
        <div
          className={styles.radiusBox}
          style={{ width: size, height: size, borderRadius: `var(--${name})` }}
        >
          {value}
        </div>
        <div className={styles.radiusLens} style={{ width: lens, height: lens }} aria-hidden>
          <span className={styles.radiusLensCorner} />
        </div>
      </div>
      <code className={styles.tokenName}>--{name}</code>
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className={`sb-unstyled ${styles.radiusGrid}`}>
      {radiusScale.map((t) => (
        <RadiusSample key={t.name} {...t} />
      ))}
    </div>
  );
}
