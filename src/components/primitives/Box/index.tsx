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

type BoxProps = StyledComponentProps<'div', {}, {}, never> &
    BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    SpaceProps &
    TypographyProps &
    ZIndexProps;

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

export { BoxProps };
export default Box;
