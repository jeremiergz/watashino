import React from 'react';
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
    space,
    SpaceProps,
    typography,
    TypographyProps,
    zIndex,
    ZIndexProps,
} from 'styled-system';
import { Theme } from '../../../theme';

type BoxProps = StyledComponentProps<
    'div',
    Theme,
    BorderProps &
        ColorProps &
        FlexboxProps &
        LayoutProps &
        SpaceProps &
        Omit<TypographyProps, 'fontWeight'> &
        ZIndexProps,
    never
> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
    color?: keyof Theme['colors'];
    fontWeight?: keyof Theme['fontWeights'];
};

const Box = styled.div<BoxProps>`
    ${compose(
        border,
        color,
        flexbox,
        layout,
        space,
        typography,
        zIndex,
    )}
`;

Box.displayName = 'Box';

export { BoxProps };
export default Box;
