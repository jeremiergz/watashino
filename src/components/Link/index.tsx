import Anchor, { AnchorProps } from 'components/Anchor';
import withoutStylingProps from 'components/hocs/withoutStylingProps';
import { useTheming } from 'components/providers/ThemeProvider';
import { Link as BaseGatsbyLink } from 'gatsby';
import { OutboundLink as BaseOutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { Routes } from 'utils/Routes';

const GatsbyLink = withoutStylingProps(BaseGatsbyLink);
const OutboundLink = withoutStylingProps(BaseOutboundLink);

const Link: React.FC<LinkProps> = ({ children, external, partiallyActive = false, to, ...rest }) => {
  const { theme } = useTheming();
  const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
  const target = isTouchDevice ? '_self' : '_blank';
  const linkProps = external
    ? {
        as: OutboundLink,
        href: to,
        rel: 'noopener noreferrer',
        target,
      }
    : {
        activeStyle: partiallyActive ? { color: theme.colors.primary } : {},
        as: GatsbyLink,
        partiallyActive: partiallyActive && (to !== Routes.index ? true : false),
        to,
      };
  return (
    <Anchor {...linkProps} {...rest}>
      {children}
    </Anchor>
  );
};

Link.displayName = 'Link';

export type LinkProps = AnchorProps & {
  external?: boolean;
  partiallyActive?: boolean;
  to: string;
};
export default Link;
