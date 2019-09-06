import React from 'react';
import Box, { BoxProps } from '../Box';

type FlexProps = BoxProps;

const Flex = ({ children, ...rest }: BoxProps) => {
    return (
        <Box display="flex" {...rest}>
            {children}
        </Box>
    );
};

Flex.displayName = 'Flex';

export { FlexProps };
export default Flex;
