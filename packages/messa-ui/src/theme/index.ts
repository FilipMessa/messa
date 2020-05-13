import { COLORS, FONT_WEIGHTS } from '@theme/tokens';

export const basicTheme = {
  colors: {
    primary: COLORS.black,
    secondary: COLORS.white,
    default: COLORS.black,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: FONT_WEIGHTS.normal,
    heading: FONT_WEIGHTS.bold,
    bold: FONT_WEIGHTS.bold,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Roboto',
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
          fontSize: 6,
        },
        medium: {
          fontSize: 7,
        },
        large: {
          fontSize: 8,
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
export type FontSizeIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type typographyPresets = 'heading';
