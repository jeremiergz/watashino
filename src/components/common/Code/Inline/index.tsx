import React from 'react';
import Text, { TextProps } from '../../../primitives/Text';

type InlineCodeProps = TextProps;

const vsCodeBackgroundColor = '#1E1E1E';

const InlineCode = ({ children, ...rest }: InlineCodeProps) => {
  return (
    <Text
      as="code"
      backgroundColor={vsCodeBackgroundColor}
      borderRadius={8}
      color="white"
      display="inline-flex"
      fontSize={16}
      paddingX={2}
      paddingY="2px"
      textAlign="left"
      {...rest}
    >
      {children}
    </Text>
  );
};

InlineCode.displayName = 'InlineCode';

export { InlineCodeProps };
export default InlineCode;
