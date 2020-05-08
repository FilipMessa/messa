import React from 'react';
import { render } from '@test-utils';
import { generateImage } from 'jsdom-screenshot';

import { Text } from '../Text';

describe('Text component', () => {
  it('should render correctly', async () => {
    const text = 'live long and prosper';
    const { getByText } = render(<Text>{text}</Text>);

    const element = getByText(text);
    expect(element).toBeInTheDocument();

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });
});
