import React, { FunctionComponent } from 'react';
import Svg, { SvgProps } from '../../common/Svg';

const Person: FunctionComponent<PersonProps> = ({ fill, ...rest }) => {
  return (
    <Svg {...rest}>
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill={fill}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
};

Person.displayName = 'Person';

export type PersonProps = SvgProps;
export default Person;
