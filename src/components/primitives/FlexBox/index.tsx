import Box, { BoxProps } from 'components/primitives/Box';
import React from 'react';

const FlexBox: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
};

FlexBox.displayName = 'FlexBox';

export type FlexBoxProps = BoxProps;
export default FlexBox;
