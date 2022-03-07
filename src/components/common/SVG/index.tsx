import clsx from 'clsx';
import React from 'react';

function SVG({ primaryClassName, ...rest }: SVGProps): JSX.Element {
  return (
    <svg
      className={clsx(primaryClassName)}
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    />
  );
}

export type SVGProps = Omit<React.ComponentProps<'svg'>, 'className'> & {
  primaryClassName?: string;
  secondaryClassName?: string;
};
export default SVG;
