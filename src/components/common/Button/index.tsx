import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & PositionProps & {}>;

const BaseButton = styled.button`
    ${position}
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    outline: inherit;
    padding: 0;
    transition: color 100ms ease-in-out;
    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const Button = ({ children, ...rest }: ButtonProps) => {
    return <BaseButton {...rest}>{children}</BaseButton>;
};

Button.displayName = 'Button';

export default Button;
