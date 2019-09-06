import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../../../theme';
import BaseBox, { BoxProps } from '../../primitives/Box';

type LinkProps = BoxProps & {
    external?: boolean;
    to: string;
    variant?: 'underlined';
};

const Box = styled(BaseBox)`
    text-decoration: none;
    transition: color 100ms ease-in-out;
    :hover {
        color: ${theme.colors.secondary};
    }
    ${variant({
        variants: {
            underlined: {
                textDecoration: 'underline',
            },
        },
    })}
`;

const Link = ({ children, external, to, ...rest }: LinkProps) => {
    const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
    const target = isTouchDevice ? '_self' : '_blank';
    const linkProps = external
        ? {
              href: to,
              rel: 'noopener noreferrer',
              target,
          }
        : {
              activeStyle: { color: theme.colors.secondary },
              partiallyActive: to !== '/' ? true : false,
              to,
          };
    return (
        <Box as={external ? 'a' : GatsbyLink} color="text" fontWeight="semi-bold" {...linkProps} {...rest}>
            {children}
        </Box>
    );
};

Link.displayName = 'Link';

export { LinkProps };
export default Link;
