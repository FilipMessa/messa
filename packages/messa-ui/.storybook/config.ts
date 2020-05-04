import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ThemeDecorator from './ThemeDecorator';

addDecorator(withInfo);
addDecorator(ThemeDecorator);
