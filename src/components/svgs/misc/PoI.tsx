import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

function PoI({ secondaryClassName, ...rest }: PoIProps): JSX.Element {
  return (
    <SVG viewBox="0 0 20 20" {...rest}>
      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
    </SVG>
  );
}

export type PoIProps = SVGProps;
export default PoI;
