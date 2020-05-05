import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import { Title } from './Title';

export default { title: 'Title' };

export const basic = () => {
  const as = select('as', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'], 'h2');
  const fontSize = select('fontSize', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h2');
  return (
    <Title fontSize={fontSize} as={as}>
      {text('children', 'Lorem Ipsum')}
    </Title>
  );
};
