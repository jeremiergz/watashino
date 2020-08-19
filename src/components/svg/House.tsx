import SVG, { SVGProps } from 'components/primitives/SVG';
import React from 'react';

const House: React.FC<HouseProps> = ({ fill, ...rest }) => {
  return (
    <SVG {...rest}>
      <path d="M0 0H24V24H0z" fill="none" />
      <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z" fill={fill} />
    </SVG>
  );
};

House.displayName = 'House';

export type HouseProps = SVGProps;
export default House;
