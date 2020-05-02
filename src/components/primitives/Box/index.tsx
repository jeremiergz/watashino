import { ComponentType, TimeHTMLAttributes } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
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
import { Theme, ThemeProps } from '../../../theme';

const Box = styled.div<BoxProps>`
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

export type BoxProps = StyledComponentProps<
  'div',
  Theme,
  BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    SpaceProps &
    Omit<TypographyProps, 'fontWeight'> &
    PositionProps &
    ZIndexProps &
    TimeHTMLAttributes<unknown> &
    ThemeProps,
  never
> & {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  listStyle?: string;
  transform?: string;
  transition?: string;
};
export default Box;
