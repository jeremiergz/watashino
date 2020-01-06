import { Link as BaseGatsbyLink } from 'gatsby';
import React from 'react';
import { Routes } from '../../../utils/Routes';
import { useTheming } from '../../core/ThemingManager';
import withoutStylingProps from '../../hocs/withoutStylingProps';
import Anchor, { AnchorProps } from '../Anchor';

type LinkProps = AnchorProps & {
  external?: boolean;
  partiallyActive?: boolean;
  to: string;
};

const GatsbyLink = withoutStylingProps(BaseGatsbyLink);

const Link = ({ children, external, partiallyActive = false, to, ...rest }: LinkProps) => {
  const { theme } = useTheming();
  const isTouchDevice = typeof window !== 'undefined' && window.navigator.maxTouchPoints > 0;
  const target = isTouchDevice ? '_self' : '_blank';
  const linkProps = external
    ? {
        href: to,
        rel: 'noopener noreferrer',
        target,
      }
    : {
        activeStyle: partiallyActive && { color: theme.colors.primary },
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

export { LinkProps };
export default Link;
