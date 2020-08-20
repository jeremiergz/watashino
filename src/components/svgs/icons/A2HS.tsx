import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const A2HS: React.FC<A2HSProps> = ({ fill, ...rest }) => {
  return (
    <SVG {...rest}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z"
        fill={fill}
      />
      <path d="M0 0h24v24H0V0z" fill="none" />
    </SVG>
  );
};

A2HS.displayName = 'A2HS';

export type A2HSProps = SVGProps;
export default A2HS;
