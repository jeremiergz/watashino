import styled, { StyledComponentProps } from 'styled-components';
import {
    color,
    ColorProps,
    display,
    DisplayProps,
    compose,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    zIndex,
    ZIndexProps,
} from 'styled-system';

type TextProps = StyledComponentProps<
    'span',
    {},
    ColorProps &
        DisplayProps &
        SpaceProps &
        TypographyProps &
        ZIndexProps & {
            as?: keyof JSX.IntrinsicElements | React.ComponentType;
        },
    never
>;

const Text = styled.span<TextProps>`
    ${compose(
        color,
        display,
        space,
        typography,
        zIndex,
    )}
`;

export { TextProps };
export default Text;
