import React from 'react';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../src/theme';

const ThemeDecorator = (storyFn) => <ThemeProvider theme={basicTheme}>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
