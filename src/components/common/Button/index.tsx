import { SVGProps } from '@/components/common/SVG';
import clsx from 'clsx';
import React from 'react';

function Button({ children, className, icon, ...rest }: ButtonProps): JSX.Element {
  const LeftIcon = icon;

  return (
    <button
      className={clsx(
        className,
        'flex items-center rounded py-2 px-4 text-xs font-semibold uppercase shadow-material-sm',
        'transition hover:shadow-material-lg hover:brightness-75',
      )}
      {...rest}
    >
      {icon && <LeftIcon primaryClassName="fill-gray-300 mr-1" height={16} width={16} />}
      {children}
    </button>
  );
}

export type ButtonProps = React.ComponentProps<'button'> & {
  icon?: React.ComponentType<SVGProps>;
};
export default Button;
