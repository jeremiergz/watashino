import React, { FunctionComponent } from 'react';
import Svg, { SvgProps } from '../../common/Svg';

const Description: FunctionComponent<DescriptionProps> = ({ fill, ...rest }) => {
  return (
    <Svg {...rest}>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        fill={fill}
      ></path>
    </Svg>
  );
};

Description.displayName = 'Description';

export type DescriptionProps = SvgProps;
export default Description;
