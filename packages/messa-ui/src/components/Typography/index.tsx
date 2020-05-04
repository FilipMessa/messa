import * as React from 'react';
import styled from 'styled-components';
import { color, typography, TypographyProps, ColorProps } from 'styled-system';

import { Theme } from '@theme/index';

interface Props extends TypographyProps<Theme>, ColorProps<Theme> {
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  color?: 'primary' | 'seconday';
  fontSize?: 'small' | 'medium' | 'large';
}

export const Typography = styled.span<Props>`
  ${color}
  ${typography}
`;
Typography.defaultProps = {
  as: 'span',
  fontSize: 'medium',
  color: 'primary',
  fontFamily: 'Roboto',
};
Typography.displayName = 'Typography';
