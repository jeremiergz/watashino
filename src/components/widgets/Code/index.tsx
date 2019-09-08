import React from 'react';
import Text, { TextProps } from '../../primitives/Text';

type CodeProps = TextProps;

const Code = ({ children, ...rest }: CodeProps) => {
    return (
        <Text as="code" fontSize={16} textAlign="left" {...rest}>
            {children}
        </Text>
    );
};

Code.displayName = 'Code';

export { CodeProps };
export default Code;
