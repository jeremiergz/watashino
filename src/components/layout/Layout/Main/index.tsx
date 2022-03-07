import clsx from 'clsx';
import React from 'react';

function Main({ children, className, ...rest }: MainProps): JSX.Element {
  return (
    <main className={clsx(className, 'grid max-w-5xl transform-gpu will-change-transform')} {...rest}>
      {children}
    </main>
  );
}

export type MainProps = React.ComponentProps<'main'>;
export default Main;
