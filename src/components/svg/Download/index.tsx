import React, { HTMLAttributes } from 'react';
import Svg, { SvgProps } from '../../common/Svg';

type DownloadProps = SvgProps;

const Download = (props: DownloadProps) => {
  return (
    <Svg {...props}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
};

Download.displayName = 'Download';

export default Download;
