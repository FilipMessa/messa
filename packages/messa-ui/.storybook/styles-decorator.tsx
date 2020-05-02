import * as React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { basicTheme } from '../src/theme';

const StylesDecorator = (storyFn) => (
  <StyledThemeProvider theme={basicTheme}>{storyFn()}</StyledThemeProvider>
);

export default StylesDecorator;
