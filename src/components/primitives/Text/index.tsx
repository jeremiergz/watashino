import styled, { StyledComponentProps } from 'styled-components';
import {
    color,
    ColorProps,
    compose,
    display,
    DisplayProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    zIndex,
    ZIndexProps,
} from 'styled-system';
import { Theme } from '../../../theme';

type TextProps = StyledComponentProps<
    'span',
    Theme,
    ColorProps & DisplayProps & SpaceProps & Omit<TypographyProps, 'fontWeight'> & ZIndexProps,
    never
> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
    color?: keyof Theme['colors'];
    fontWeight?: keyof Theme['fontWeights'];
};

const Text = styled.span<TextProps>`
    ${compose(
        color,
        display,
        space,
        typography,
        zIndex,
    )}
`;

Text.displayName = 'Text';

export { TextProps };
export default Text;
