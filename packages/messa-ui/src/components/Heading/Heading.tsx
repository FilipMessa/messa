import * as React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Typography } from '@components/base/Typography';

type SizeType = 'small' | 'medium' | 'large';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  children: React.ReactNode;
  size?: SizeType;
  color?: 'primary' | 'secondary' | 'default';
}

const size = variant<{ fontSize: number }, SizeType, 'size'>({
  prop: 'size',
  scale: 'typography.heading.sizes',
  variants: {
    small: {
      fontSize: 4,
    },
    medium: {
      fontSize: 5,
    },
    large: {
      fontSize: 6,
    },
  },
});

const ExtendTypography = styled(Typography)<{ size: SizeType }>`
  ${size}
`;

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  children,
  color = 'default',
  size = 'medium',
}: HeadingProps) => (
  <ExtendTypography size={size} variant="heading" role="heading" color={color} as={as}>
    {children}
  </ExtendTypography>
);

Heading.displayName = 'Heading';
