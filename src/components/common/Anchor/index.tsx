import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import BaseBox, { BoxProps } from '../../primitives/Box';

type AnchorProps = BoxProps & {
  download?: boolean;
  href?: string;
  target?: string;
  variant?: 'underlined';
};

const A = styled(BaseBox)`
  color: inherit;
  text-decoration: none;
  transition: color 100ms ease-in-out;
  .gatsby-image-wrapper {
    transition: filter 100ms ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    .gatsby-image-wrapper {
      filter: brightness(0.75);
    }
  }
  ${variant({
    variants: {
      underlined: {
        textDecoration: 'underline',
      },
    },
  })}
`;

const Anchor = ({ children, ...rest }: AnchorProps) => {
  const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
  const target = isTouchDevice ? '_self' : '_blank';
  return (
    <A as="a" fontWeight="semi-bold" target={target} {...rest}>
      {children}
    </A>
  );
};

Anchor.displayName = 'Anchor';

export { AnchorProps };
export default Anchor;
