import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function Happy({ secondaryClassName, ...rest }: HappyProps): JSX.Element {
  return (
    <SVG viewBox="0 0 64 64" {...rest}>
      <circle cx="32" cy="32" r="30" fill="#ffdd67" />
      <g fill="#664e27">
        <circle cx="20.5" cy="24.6" r="5" />
        <circle cx="43.5" cy="24.6" r="5" />
        <path d="m48.1 37c-4.3 6.1-9.5 7.6-16.1 7.6s-11.8-1.5-16.1-7.6c-.6-.8-2.2-.3-1.8.9 2.3 8 10 12.7 18 12.7s15.7-4.7 18-12.7c.2-1.2-1.4-1.7-2-.9" />
      </g>
    </SVG>
  );
}

export type HappyProps = SVGProps;
export default Happy;