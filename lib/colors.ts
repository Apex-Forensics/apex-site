/**
 * Centralized brand color palette.
 *
 * These values mirror the CSS custom properties declared in `app/globals.css`
 * (`@theme inline`). Use this object for colors referenced from JS/TSX
 * (inline `style` objects, icon `color` props, conditional values), and use
 * the matching Tailwind utilities / CSS variables for static markup.
 *
 * Keep these in sync with the `--color-apex-*` tokens in globals.css.
 */
export const colors = {
  navy: "#1B2A4A",
  navyDark: "#111d33",
  gold: "#B8922A",
  goldLight: "#FDF6E3",
  goldHover: "#9a7820",
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
