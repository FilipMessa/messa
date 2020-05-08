import React from 'react';

import { ThemeProvider } from '../src/components/base/ThemeProvider';

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
