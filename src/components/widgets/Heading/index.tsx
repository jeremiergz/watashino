import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type Props = HTMLAttributes<HTMLHeadingElement> & {
    as: 'h1' | 'h2' | 'h3' | 'h4';
};

const Heading = styled.h1<Props>`
    ${({ as }) => {
        const sizes = {
            h1: 44,
            h2: 32,
            h3: 24,
            h4: 20,
        };
        return css`
            font-size: ${sizes[as]}px;
        `;
    }}
`;

const HeadingComponent = ({ as, children, ...rest }: Props) => {
    return (
        <Heading as={as} {...rest}>
            {children}
        </Heading>
    );
};

HeadingComponent.displayName = 'Heading';

export default HeadingComponent;
