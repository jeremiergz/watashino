import React, { forwardRef } from 'react';
import Text, { TextProps } from '../../../primitives/Text';

type BlockCodeProps = TextProps;

const BlockCode = forwardRef<HTMLElement, BlockCodeProps>(({ children, ...rest }, ref) => {
  return (
    <Text as="code" fontSize={16} ref={ref} textAlign="left" {...rest}>
      {children}
    </Text>
  );
});

BlockCode.displayName = 'BlockCode';

export { BlockCodeProps };
export default BlockCode;
