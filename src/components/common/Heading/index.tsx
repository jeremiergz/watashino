import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import BaseText, { TextProps } from '../../primitives/Text';

type HeadingProps = TextProps & {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
};

const Text = styled(BaseText)<HeadingProps>`
    ${variant({
        variants: {
            h1: { fontSize: 44, fontWeight: 'bold' },
            h2: { fontSize: 32 },
            h3: { fontSize: 24 },
            h4: { fontSize: 20 },
        },
    })}
`;

const Heading = ({ children, variant, ...rest }: HeadingProps) => {
    return (
        <Text as={variant} variant={variant} {...rest}>
            {children}
        </Text>
    );
};

Heading.displayName = 'Heading';

export { HeadingProps };
export default Heading;
