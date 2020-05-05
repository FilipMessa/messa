import React from 'react';
import { ThemeProvider } from 'styled-components';

import { basicTheme } from '../src/theme';
import { Reset } from '../src/components/Reset';

const ThemeDecorator = (storyFn) => (
  <>
    <Reset />
    <ThemeProvider theme={basicTheme}>{storyFn()}</ThemeProvider>
  </>
);

export default ThemeDecorator;
