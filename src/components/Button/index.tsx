import styled from 'styled-components';
import { compose, layout, LayoutProps, position, PositionProps, space, SpaceProps, variant } from 'styled-system';

type ButtonKnownProps = LayoutProps & PositionProps & SpaceProps & { variant: 'contained' | 'outlined' | 'text' };

const Button = styled.button<ButtonKnownProps>`
  ${compose(layout, position, space)}
  align-items: center;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font: inherit;
  justify-content: center;
  outline: inherit;
  padding: 0;
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

Button.displayName = 'Button';

export type ButtonProps = React.ComponentProps<typeof Button>;
export default Button;
