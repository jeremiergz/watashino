import SVG, { SVGProps } from '@/components/common/SVG';
import React from 'react';

// From https://github.com/catamphetamine/country-flag-icons/blob/master/flags/3x2/CA.svg

function Canada({ secondaryClassName, ...rest }: CanadaProps): JSX.Element {
  return (
    <SVG viewBox="0 0 513 342" {...rest}>
      <rect fill="#ffffff" height="342" width="513" y="0" />
      <g fill="#ff0000">
        <rect height="342" width="142" y="0" />
        <rect height="342" width="142" x="371" y="0" />
        <polygon points="306.5,206 356.9,180.8 331.7,168.2 331.7,143 281.3,168.2 306.5,117.8 281.3,117.8 256.1,80 230.9,117.8 205.7,117.8 230.9,168.2 180.5,143 180.5,168.2 155.3,180.8 205.7,206 193.1,231.2 243.5,231.2 243.5,269 268.7,269 268.7,231.2 319.1,231.2" />
      </g>
    </SVG>
  );
}

export type CanadaProps = SVGProps;
export default Canada;
