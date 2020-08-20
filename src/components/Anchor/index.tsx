import BaseBox, { BoxProps } from 'components/primitives/Box';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const A = styled(BaseBox)`
  color: inherit;
  text-decoration: none;
  transition: color 100ms ease-in-out, filter 100ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(0.75);
  }
  ${variant({
    variants: {
      underlined: {
        textDecoration: 'underline',
      },
    },
  })}
`;

const Anchor: React.FC<AnchorProps> = ({ children, ...rest }) => {
  const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
  const target = isTouchDevice ? '_self' : '_blank';
  return (
    <A as="a" fontWeight="semi-bold" target={target} {...rest}>
      {children}
    </A>
  );
};

Anchor.displayName = 'Anchor';

export type AnchorProps = BoxProps & {
  download?: boolean;
  href?: string;
  target?: string;
  variant?: 'underlined';
};
export default Anchor;
