import { TimeHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps
} from 'styled-system';
import { ThemeProps } from 'theme';

type BoxKnownProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  Omit<TypographyProps, 'fontWeight'> &
  TimeHTMLAttributes<unknown> &
  ThemeProps &
  ZIndexProps & {
    listStyle?: string;
    transform?: string;
    transition?: string;
  };

const Box = styled.div<BoxKnownProps>`
  ${compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    typography,
    zIndex,
    system({
      listStyle: true,
      transform: true,
      transition: true,
    }),
  )}
`;

Box.displayName = 'Box';

export type BoxProps = React.ComponentProps<typeof Box>;
export default Box;
