import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Download: React.FC<DownloadProps> = ({ fill, ...rest }) => {
  return (
    <SVG {...rest}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill={fill} />
      <path d="M0 0h24v24H0z" fill="none" />
    </SVG>
  );
};

Download.displayName = 'Download';

export type DownloadProps = SVGProps;
export default Download;
