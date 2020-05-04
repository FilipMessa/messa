import { FONT_SIZE_BASE, COLORS } from '@theme/tokens';

export const basicTheme = {
  colors: {
    primary: COLORS.black,
    seconday: COLORS.white,
  },
  fontSizes: {
    small: FONT_SIZE_BASE * 0.75,
    medium: FONT_SIZE_BASE,
    large: FONT_SIZE_BASE * 1.5,
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256], // 12 possible spaces
};

export type Theme = typeof basicTheme;
export type ThemeProps = { theme?: Theme };
export type ColorType = keyof Theme['colors'];

// 9 possible shades of a ColorType
export type ColorIndex = 0;

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type FontSize = keyof Theme['fontSizes'];
