import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';

type Props = Omit<GatsbyLinkProps<null>, 'ref'> & {
    underlined?: boolean;
};

const Link = styled(GatsbyLink)<Props>`
    text-decoration: ${({ underlined }) => (underlined ? 'underlined' : 'none')};
    font-weight: ${theme.fonts.main.weight.semiBold};
    color: ${theme.colors.text};
    transition: color 100ms ease-in-out;
    :hover {
        color: ${theme.colors.secondary};
    }
`;

const LinkComponent = ({ children, to, underlined, ...rest }: Props) => {
    return (
        <Link to={to} underlined={underlined} activeStyle={{ color: theme.colors.secondary }} {...rest}>
            {children}
        </Link>
    );
};

LinkComponent.displayName = 'Link';

export default LinkComponent;
