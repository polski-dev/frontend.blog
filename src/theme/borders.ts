export type Borders = typeof borders;
import { colors } from "./colors";

export const borders = {
  gray10SolidSmall: `0.1rem solid ${colors.gray10}`,
} as const;
