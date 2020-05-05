import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Text } from './Text';

export default { title: 'Text' };

export const basic = () => {
  const as = select('as', ['p', 'span', 'div'], 'span');
  const fontSize = select('fontSize', ['small', 'medium', 'large'], 'medium');
  return (
    <Text fontSize={fontSize} as={as}>
      {text('children', 'Lorem Ipsum')}
    </Text>
  );
};
