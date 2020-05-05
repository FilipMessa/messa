import * as React from 'react';

import { Typography } from '@components/internal/Typography';
import { CommonProps } from '@components/common/types';
import { FontWeight, TextFontSize } from '@theme';

interface Props extends CommonProps {
  children: React.ReactNode;
  as?: 'span' | 'p' | 'div';
  fontWeight?: FontWeight;
  fontSize?: TextFontSize;
}

export const Text: React.FC<Props> = ({ children, as, fontWeight, fontSize }: Props) => (
  <Typography fontSize={fontSize} fontWeight={fontWeight} as={as}>
    {children}
  </Typography>
);

Text.displayName = 'Text';

Text.defaultProps = {
  as: 'span',
  fontWeight: 'bold',
  fontSize: 'medium',
};
