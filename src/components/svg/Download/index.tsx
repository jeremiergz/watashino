import React from 'react';
import Svg, { SvgProps } from '../../common/Svg';

type DownloadProps = SvgProps;

const Download = ({ fill, ...rest }: DownloadProps) => {
  return (
    <Svg {...rest}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill={fill} />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
};

Download.displayName = 'Download';

export default Download;
