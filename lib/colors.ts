/**
 * Centralized brand color palette — the single source of truth for colors.
 *
 * Use this object for colors referenced from JS/TSX (inline `style` objects,
 * icon `color` props, conditional values). For plain CSS in `globals.css`,
 * reference the matching `var(--color-apex-*)` custom properties, which are
 * generated from this object via `cssVars` (see below) and injected at the
 * document root in `app/layout.tsx`. Edit colors here and nowhere else.
 */
export const colors = {
  navy: "#082248",
  navyDark: "#041840",
  gold: "#DEA93A",
  goldLight: "#FBDF9C",
  goldHover: "#B8862C",
  blueLight: "#EEF2F7",
  soft: "#F5F5F5",
  grey: "#555555",
  greyDark: "#444444",
  dark: "#1A1A1A",
  offWhite: "#F9F9F9",
  border: "#EEEEEE",
  borderLight: "#f0f0f0",
  muted: "#a0aec0",
  white: "#ffffff",
  whatsapp: "#25D366",
} as const;

export type BrandColor = keyof typeof colors;

/**
 * `:root` CSS custom-property declarations generated from `colors`
 * (e.g. `--color-apex-navy: #082248;`). Injected once at the document root
 * in `app/layout.tsx` so plain CSS can reference the same palette via
 * `var(--color-apex-*)`. This keeps `colors` the single source of truth
 * for both JS/TSX and CSS — no manual syncing required.
 */
export const cssVars = `:root {\n${Object.entries(colors)
  .map(
    ([key, value]) =>
      `  --color-apex-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${value};`
  )
  .join("\n")}\n}`;

/**
 * Returns an `rgba()` string for a brand hex color at the given opacity.
 * Use this for translucent tints/overlays so they stay tied to the
 * centralized palette instead of hardcoding raw rgb triples.
 *
 * @example withAlpha(colors.gold, 0.15) // soft gold pill background
 */
export function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
