import React from 'react';
import Svg, { SvgProps } from '../../common/Svg';

type A2HSProps = SvgProps;

const A2HS = ({ fill, ...rest }: A2HSProps) => {
  return (
    <Svg {...rest}>
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path
        d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z"
        fill={fill}
      ></path>
      <path d="M0 0h24v24H0V0z" fill="none"></path>
    </Svg>
  );
};

A2HS.displayName = 'A2HS';

export default A2HS;