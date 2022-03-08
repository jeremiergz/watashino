import clsx from 'clsx';
import React from 'react';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={clsx('m-auto flex h-full w-full flex-col items-center pt-12 md:pt-0', 'dark:text-gray-300')}>
      {children}
    </div>
  );
}

export type LayoutProps = {
  children: React.ReactNode;
};
export default Layout;
