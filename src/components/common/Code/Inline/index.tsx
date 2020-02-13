import React from 'react';
import Text, { TextProps } from '../../../primitives/Text';

type InlineCodeProps = TextProps;

const InlineCode = ({ children, ...rest }: InlineCodeProps) => {
  return (
    <Text
      as="code"
      backgroundColor="secondary"
      borderRadius={8}
      color="white"
      display="inline-block"
      fontSize={16}
      paddingBottom={1}
      paddingTop="2px"
      paddingX={2}
      textAlign="left"
      verticalAlign="bottom"
      {...rest}
    >
      {children}
    </Text>
  );
};

InlineCode.displayName = 'InlineCode';

export { InlineCodeProps };
export default InlineCode;
