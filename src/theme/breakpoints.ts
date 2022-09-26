export type Breakpoints = typeof breakpoints;

export const breakpoints = {
  mobile: 768, // max-width
  mobileOrTablet: 1224, // max-width
  desktop: 1225, // min-width
} as const;
