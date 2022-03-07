import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function Sad({ secondaryClassName, ...rest }: SadProps): JSX.Element {
  return (
    <SVG viewBox="0 0 64 64" {...rest}>
      <circle cx="32" cy="32" r="30" fill="#ffdd67" />
      <g fill="#664e27">
        <circle cx="20.5" cy="24.6" r="5" />
        <circle cx="43.5" cy="24.6" r="5" />
        <path d="m19.4 45.8c8.1-5.7 17.1-5.6 25.2 0 1 .7 1.8-.5 1.2-1.6-2.5-4-7.4-7.7-13.8-7.7s-11.3 3.6-13.8 7.7c-.6 1.1.2 2.3 1.2 1.6" />
      </g>
    </SVG>
  );
}

export type SadProps = SVGProps;
export default Sad;
