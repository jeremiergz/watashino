import { ThemeProps } from 'components/providers/ThemeProvider';
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
  ZIndexProps,
} from 'styled-system';

type BoxKnownProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  ThemeProps &
  Omit<TypographyProps, 'fontWeight'> &
  TimeHTMLAttributes<unknown> &
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
