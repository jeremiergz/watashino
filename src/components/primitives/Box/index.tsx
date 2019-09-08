import React, { TimeHTMLAttributes } from 'react';
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
import { Theme, ThemeProps } from '../../../theme';

type BoxProps = StyledComponentProps<
    'div',
    Theme,
    BorderProps &
        ColorProps &
        FlexboxProps &
        LayoutProps &
        SpaceProps &
        Omit<TypographyProps, 'fontWeight'> &
        ZIndexProps &
        TimeHTMLAttributes<unknown> &
        ThemeProps,
    never
> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
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
