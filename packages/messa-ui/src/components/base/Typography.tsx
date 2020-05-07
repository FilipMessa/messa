/* eslint-disable no-shadow */

import styled from 'styled-components';
import { typography, color, compose, TypographyProps, ColorProps } from 'styled-system';

import { Theme } from '@theme';

type StyledTextProps = TypographyProps<Theme> & ColorProps<Theme>;

export const Typography = styled.span<StyledTextProps>`
  ${compose(typography, color)}
`;

Typography.defaultProps = {
  fontFamily: 'Roboto',
};
