import React from 'react';
import { render } from '@test-utils';
import { Heading } from '../Heading';

describe('Heading component', () => {
  it('should render correctly', () => {
    const text = 'I SEE DEAD CODE';
    const { getByText, getByRole } = render(<Heading as="div">{text}</Heading>);

    const element = getByText(text);

    expect(getByRole('heading')).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});
