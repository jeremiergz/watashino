import Anchor from '@/components/common/Anchor';
import useSiteMetadata from '@/components/hooks/data/useSiteMetadata';
import clsx from 'clsx';
import React from 'react';

function Footer({ className, ...rest }: FooterProps): JSX.Element {
  const { repositoryUrl, version } = useSiteMetadata();

  const sourceCodeUrl = `${repositoryUrl}/tree/${version}`;

  return (
    <footer className={clsx(className, 'flex flex-col items-center justify-center')} {...rest}>
      <Anchor
        aria-label={`Go to ${sourceCodeUrl}`}
        className="border-b border-dotted text-2xs text-gray-400"
        external
        href={sourceCodeUrl}
      >
        <div className="text-sm text-gray-300">v{version}</div>
        source code
      </Anchor>
    </footer>
  );
}

export type FooterProps = React.ComponentProps<'footer'>;
export default Footer;
