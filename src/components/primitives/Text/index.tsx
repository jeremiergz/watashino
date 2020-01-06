import { TimeHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';
import { ThemeProps } from '../../../theme';

type TextProps = BorderProps &
  ColorProps &
  DisplayProps &
  LayoutProps &
  SpaceProps &
  Omit<TypographyProps, 'fontWeight'> &
  ZIndexProps &
  ThemeProps &
  TimeHTMLAttributes<unknown>;

const Text = styled.span<TextProps>`
  ${compose(border, color, display, layout, space, typography, zIndex)}
`;

Text.displayName = 'Text';

export { TextProps };
export default Text;
