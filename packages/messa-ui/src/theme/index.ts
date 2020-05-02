// This is just example values, will be change

export const basicTheme = {
  colors: {
    primary: [
      'hsl(205, 79%, 97%)',
      'hsl(205, 97%, 85%)',
      'hsl(205 ,84%, 74%)',
      'hsl(205 ,74%, 65%)',
      'hsl(205, 65%, 55%)',
      'hsl(205, 67%, 45%)',
      'hsl(205, 76%, 39%)',
      'hsl(205, 82%, 33%)',
      'hsl(205, 87%, 29%)',
      'hsl(205, 100%, 21%)',
    ],
    secondary: [
      'hsl(171, 82%, 96%)',
      'hsl(172, 97%, 88%)',
      'hsl(174, 96%, 78%)',
      'hsl(176, 87%, 67%)',
      'hsl(178, 78%, 57%)',
      'hsl(180, 77%, 47%)',
      'hsl(182, 85%, 39%)',
      'hsl(184, 90%, 34%)',
      'hsl(186, 91%, 29%)',
      'hsl(188, 91%, 23%)',
    ],
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
};

export type Theme = typeof basicTheme;
export type ThemeProps = { theme?: Theme };
export type ColorType = keyof Theme['colors'];

// 9 possible shades of a ColorType
export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
