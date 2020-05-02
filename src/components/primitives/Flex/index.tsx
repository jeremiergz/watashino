import React, { FunctionComponent } from 'react';
import Box, { BoxProps } from '../Box';

const Flex: FunctionComponent<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
};

Flex.displayName = 'Flex';

export type FlexProps = BoxProps;
export default Flex;
