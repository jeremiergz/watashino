import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../../../theme';
import Text, { TextProps } from '../../primitives/Text';

type HeadingProps = TextProps & {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
};

const Heading = styled(Text)<HeadingProps>`
    ${variant({
        variants: {
            h1: { fontSize: 44, fontWeight: theme.fonts.main.weight.bold },
            h2: { fontSize: 32 },
            h3: { fontSize: 24 },
            h4: { fontSize: 20 },
        },
    })}
`;

const HeadingComponent = ({ children, variant, ...rest }: HeadingProps) => {
    return (
        <Heading as={variant} variant={variant} {...rest}>
            {children}
        </Heading>
    );
};

HeadingComponent.displayName = 'Heading';

export { HeadingProps };
export default HeadingComponent;
