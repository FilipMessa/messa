import styled, { CSSObject } from 'styled-components';
import { compose, space, layout, typography, color, flexbox } from 'styled-system';
import { Theme } from '@theme';
import css from '@styled-system/css';

// eslint-disable-next-line no-shadow
const sx: unknown = ({ sx, theme }: { sx: { [key: string]: any }; theme: Theme }) => css(sx)(theme);

export const Box = styled.div`
  ${compose(space, layout, typography, color, flexbox)}
  ${sx as CSSObject}
`;
