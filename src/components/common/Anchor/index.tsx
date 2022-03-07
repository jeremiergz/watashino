import clsx from 'clsx';
import React from 'react';

function Anchor({ className, children, external = false, ...rest }: AnchorProps): JSX.Element {
  const target: React.HTMLAttributeAnchorTarget = external ? '_blank' : '_self';

  return (
    <a
      className={clsx(className, 'transition hover:shadow-md hover:brightness-90')}
      target={target}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

export type AnchorProps = Omit<React.ComponentProps<'a'>, 'rel' | 'target'> & {
  external?: boolean;
};
export default Anchor;
