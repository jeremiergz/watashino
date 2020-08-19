import SVG, { SVGProps } from 'components/primitives/SVG';
import React from 'react';

const Close: React.FC<CloseProps> = ({ fill, ...rest }) => {
  return (
    <SVG {...rest}>
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill={fill}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </SVG>
  );
};

Close.displayName = 'Close';

export type CloseProps = SVGProps;
export default Close;
