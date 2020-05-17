import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Text } from './Text';

export default { title: 'Text' };

export const basic = () => {
  const as = select('as', ['p', 'span', 'div'], 'span');
  const fontSize = select('fontSize', [0, 1, 2, 3, 4, 5, 6, 7], 1);
  return (
    <Text fontSize={fontSize} as={as}>
      {text('children', 'Lorem Ipsum')}
    </Text>
  );
};
