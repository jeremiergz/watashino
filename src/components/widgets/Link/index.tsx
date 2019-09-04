import { Link as GatsbyLink } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

type Props = HTMLAttributes<HTMLAnchorElement> & {
    external?: boolean;
    to: string;
    underlined?: boolean;
};

const Link = styled.a`
    text-decoration: ${({ underlined }: Partial<Props>) => (underlined ? 'underlined' : 'none')};
    font-weight: ${theme.fonts.main.weight.semiBold};
    color: ${theme.colors.text};
    transition: color 100ms ease-in-out;
    :hover {
        color: ${theme.colors.secondary};
    }
`;

const LinkComponent = ({ children, external = false, to, underlined = false, ...rest }: Props) => {
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
              as: GatsbyLink,
              partiallyActive: to !== '/' ? true : false,
              to: to,
          };
    return (
        <Link {...linkProps} underlined={underlined} {...rest}>
            {children}
        </Link>
    );
};

LinkComponent.displayName = 'Link';

export default LinkComponent;
