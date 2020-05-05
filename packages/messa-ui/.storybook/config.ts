import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import ThemeDecorator from './ThemeDecorator';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(ThemeDecorator);
