import { breakpoints } from './breakpoints';
import { borders } from './borders';
import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { radii } from './radii';
import { shadows } from './shadows';
import { space } from './space';

export type Theme = typeof theme;

export const theme = {
  breakpoints,
  borders,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  shadows,
} as const;
