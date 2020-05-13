import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Heading } from './Heading';

export default { title: 'Heading' };

export const basic = () => {
  const as = select('as', ['h1', 'h2', 'div'], 'h2');
  const size = select('size', ['small', 'medium', 'large'], 'medium');
  return (
    <Heading size={size} as={as}>
      {text('children', 'Lorem Ipsum')}
    </Heading>
  );
};
