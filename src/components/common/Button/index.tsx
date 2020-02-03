import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { compose, layout, LayoutProps, position, PositionProps, space, SpaceProps, variant } from 'styled-system';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> &
    LayoutProps &
    PositionProps &
    SpaceProps & { variant?: 'contained' | 'outlined' | 'text' }
>;

const BaseButton = styled.button<ButtonProps>`
  ${compose(layout, position, space)}
  align-items: center;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: inherit;
  transition: color 100ms ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  ${variant({
    variants: {
      contained: {
        backgroundColor: 'secondary',
        borderRadius: 100,
        fontSize: 16,
        paddingX: 3,
        paddingY: 2,
      },
      outlined: {
        background: 'none',
        border: '1px solid grey',
        borderRadius: 100,
        paddingX: 2,
        paddingY: 1,
      },
      text: {
        background: 'none',
      },
    },
  })}
`;

const Button = ({ children, variant = 'text', ...rest }: ButtonProps) => {
  return (
    <BaseButton padding={0} variant={variant} {...rest}>
      {children}
    </BaseButton>
  );
};

Button.displayName = 'Button';

export default Button;
