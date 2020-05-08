import * as React from 'react';

import { Typography } from '@components/base/Typography';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  children: React.ReactNode;
  fontSize?: 5 | 6 | 7 | 8;
  color?: 'primary' | 'secondary' | 'default';
}

export const Heading: React.FC<HeadingProps> = ({
  as,
  children,
  color,
  fontSize,
}: HeadingProps) => (
  <Typography
    role="heading"
    color={color}
    fontSize={fontSize}
    fontWeight="heading"
    lineHeight="heading"
    as={as}
  >
    {children}
  </Typography>
);

Heading.defaultProps = {
  as: 'h2',
  color: 'default',
  fontSize: 7,
};

Heading.displayName = 'Heading';
