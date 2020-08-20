import SVG, { SVGProps } from 'components/SVG';
import React from 'react';

const Messenger: React.FC<MessengerProps> = ({ fill, ...rest }) => {
  return (
    <SVG fill={fill} viewBox="0 0 512 512" {...rest}>
      <circle cx="256" cy="256" r="224" fill="white" />
      <path d="M241.57423 210.21094l-82.95314 87.82811 75.49219-41.42186 39.44531 41.42186 82.48828-87.82811-74.65626 40.69531zm0 0" />
      <path d="M256 .000002C114.63672.000002.000002 114.63672.000002 256S114.63672 512 256 512s256-114.63672 256-256S397.36328.000002 256 .000002zm2 393.035158c-15.84765 0-31.14454-2.23829-45.53516-6.38283L160.83983 416v-55.21095c-34.57811-26.31249-56.66014-66.38672-56.66014-111.26952C104.17969 170.2539 173.04686 106 258 106c84.95703 0 153.82031 64.2539 153.82031 143.51953 0 79.2578-68.86328 143.51563-153.82031 143.51563zm0 0" />
    </SVG>
  );
};

Messenger.displayName = 'Messenger';

export type MessengerProps = SVGProps;
export default Messenger;