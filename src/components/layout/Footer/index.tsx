import Anchor from '@/components/common/Anchor';
import useSiteMetadata from '@/components/hooks/data/useSiteMetadata';
import clsx from 'clsx';
import React from 'react';

function Footer({ className, ...rest }: FooterProps): JSX.Element {
  const { repositoryUrl, version } = useSiteMetadata();

  const sourceCode = `${repositoryUrl}/tree/${version}`;

  return (
    <footer className={clsx(className, 'flex flex-col items-center justify-center')} {...rest}>
      <div className="text-sm">v{version}</div>
      <Anchor className="p-1 text-2xs" external href={sourceCode}>
        <span className="border-b border-dotted text-gray-400">source code</span>
      </Anchor>
    </footer>
  );
}

export type FooterProps = React.ComponentProps<'footer'>;
export default Footer;
