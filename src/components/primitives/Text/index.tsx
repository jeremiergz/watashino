import { ThemeProps } from 'components/providers/ThemeProvider';
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

type TextKnownProps = BorderProps &
  ColorProps &
  DisplayProps &
  LayoutProps &
  SpaceProps &
  ThemeProps &
  Omit<TypographyProps, 'fontWeight'> &
  ZIndexProps &
  TimeHTMLAttributes<unknown>;

const Text = styled.span<TextKnownProps>`
  ${compose(border, color, display, layout, space, typography, zIndex)}
`;

Text.displayName = 'Text';

export type TextProps = React.ComponentProps<typeof Text>;
export default Text;
