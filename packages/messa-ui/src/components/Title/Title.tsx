import * as React from 'react';

import { Typography } from '@components/internal/Typography';
import { FontWeight, TitleFontSize } from '@theme';

interface Props {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  fontWeight?: FontWeight;
  fontSize?: TitleFontSize;
}

export const Title: React.FC<Props> = ({ children, as, fontWeight, fontSize }: Props) => (
  <Typography fontSize={fontSize} fontWeight={fontWeight} as={as}>
    {children}
  </Typography>
);

Title.displayName = 'Title';

Title.defaultProps = {
  as: 'h2',
  fontWeight: 'bold',
  fontSize: 'h2',
};
