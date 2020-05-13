/* eslint-disable no-shadow */

import styled, { CSSObject } from 'styled-components';
import { typography, color, compose, TypographyProps, ColorProps } from 'styled-system';
import css, { get } from '@styled-system/css';

import { Theme, typographyPresets } from '@theme';

// @TODO refactor to more generic helper function (+ test)
const preset = ({ theme, variant }: { theme: Theme; variant?: typographyPresets }) => {
  if (!variant) return {};
  const PRESET_NAME = 'typography';
  return css(get(theme, `${PRESET_NAME}.${variant}.base`))(theme) as CSSObject;
};

type StyledTextProps = TypographyProps<Theme> &
  ColorProps<Theme> & { variant?: typographyPresets; className?: string };

export const Typography = styled.span<StyledTextProps>`
  ${compose(typography, color)}
  ${preset}
`;

Typography.defaultProps = {
  fontFamily: 'system-ui, sans-serif',
};
