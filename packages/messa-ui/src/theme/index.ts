import { COLORS, FONT_WEIGHTS, BASE_FONT_SIZE, LINE_HEIGHT_RATIO } from '@theme/tokens';

export const basicTheme = {
  colors: {
    primary: COLORS.black,
    secondary: COLORS.white,
    default: COLORS.black,
  },
  fontSizes: [9, BASE_FONT_SIZE, 23, 38, 62, 100, 166, 270], // BASE_FONT_SIZE compute from BASE_FONT_SIZE all https://www.modularscale.com/?14&px&1.64
  fontWeights: {
    body: FONT_WEIGHTS.normal,
    heading: FONT_WEIGHTS.bold,
    bold: FONT_WEIGHTS.bold,
  },
  lineHeights: {
    body: LINE_HEIGHT_RATIO,
    heading: LINE_HEIGHT_RATIO / 1.333, // Golden ratio
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  fonts: {
    body: 'TT Norms Pro',
    heading: 'TT Norms Pro',
    monospace: 'Menlo, monospace',
  },
  // decisions
  typography: {
    heading: {
      base: {
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontFamily: 'heading',
      },
      sizes: {
        small: {
          fontSize: 5,
        },
        medium: {
          fontSize: 6,
        },
        large: {
          fontSize: 7,
        },
      },
    },
  },
};

export type Theme = typeof basicTheme;
export type ThemeProps = { theme?: Theme };
export type ColorType = keyof Theme['colors'];

export type ColorIndex = 3;

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type FontSizeIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type typographyPresets = 'heading';
