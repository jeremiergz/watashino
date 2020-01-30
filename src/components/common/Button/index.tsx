import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { position, PositionProps, space, SpaceProps } from 'styled-system';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & PositionProps & SpaceProps & {}>;

const BaseButton = styled.button`
  ${position}
  ${space}
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: inherit;
  transition: color 100ms ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <BaseButton padding={0} {...rest}>
      {children}
    </BaseButton>
  );
};

Button.displayName = 'Button';

export default Button;
