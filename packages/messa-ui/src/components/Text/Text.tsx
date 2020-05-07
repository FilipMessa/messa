import * as React from 'react';

import { FontSizeIndex } from '@theme';

import { Typography } from '@components/base/Typography';

interface TextProps {
  as?: 'span' | 'p' | 'div';
  bold?: boolean;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  fontSize?: FontSizeIndex;
  italic?: boolean;
}

export const Text: React.FC<TextProps> = ({
  as,
  bold,
  children,
  color,
  fontSize,
  italic,
}: TextProps) => (
  <Typography
    as={as}
    color={color}
    fontSize={fontSize}
    fontStyle={italic ? 'italic' : 'normal'}
    fontWeight={bold ? 'bold' : 'body'}
    lineHeight="body"
  >
    {children}
  </Typography>
);

Text.defaultProps = {
  bold: false,
  color: 'default',
  fontSize: 1,
  italic: false,
};

Text.displayName = 'Text';
