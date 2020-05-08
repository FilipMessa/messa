import React from 'react';
import { render } from '@test-utils';
import { Text } from '../Text';

describe('Text component', () => {
  it('should render correctly', () => {
    const text = 'live long and prosper';
    const { getByText } = render(<Text>{text}</Text>);

    const element = getByText(text);
    expect(element).toBeInTheDocument();
  });
});
