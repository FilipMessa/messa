import { FONT_SIZE_BASE, COLORS, FONT_WEIGHTS } from '@theme/tokens';

export const basicTheme = {
  colors: {
    primary: COLORS.black,
    seconday: COLORS.white,
  },
  fontSizes: {
    small: FONT_SIZE_BASE * 0.75,
    medium: FONT_SIZE_BASE,
    large: FONT_SIZE_BASE * 1.5,
    h1: '3.5em',
    h2: '3em',
    h3: '2.5em',
    h4: '2em',
    h5: '1.5em',
    h6: '1em',
  },
  fontWeights: {
    normal: FONT_WEIGHTS.normal,
    bold: FONT_WEIGHTS.bold,
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
export type FontWeight = keyof Theme['fontWeights'];
export type TitleFontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'h6';
export type TextFontSize = 'small' | 'medium' | 'large';
