import * as React from 'react';
import { ThemeProvider as StyleThemeProvider } from 'styled-components';

import { basicTheme, Theme } from '@theme';

import { Reset } from '../Reset';

interface Props {
  children: React.ReactNode;
  theme?: Theme;
  hasReset?: boolean;
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme = basicTheme,
  hasReset = true,
}: Props) => (
  <>
    {hasReset && <Reset />}
    <StyleThemeProvider theme={theme}>{children}</StyleThemeProvider>
  </>
);
