import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Heading } from './Heading';

export default { title: 'Heading' };

export const basic = () => {
  const as = select('as', ['h1', 'h2', 'div'], 'h2');
  const fontSize = select('fontSize', [5, 6, 7, 8], 5);
  return (
    <Heading fontSize={fontSize} as={as}>
      {text('children', 'Lorem Ipsum')}
    </Heading>
  );
};
