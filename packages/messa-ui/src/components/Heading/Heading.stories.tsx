import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Heading } from './Heading';

export default { title: 'Heading' };

export const basic = () => {
  const as = select('as', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'], 'h2');
  const size = select('size', ['small', 'medium', 'large'], 'small');
  const color = select('color', ['primary', 'secondary', 'default'], 'default');
  return (
    <Heading size={size} as={as} color={color}>
      {text('children', 'Lorem Ipsum')}
    </Heading>
  );
};
