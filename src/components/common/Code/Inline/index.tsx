import React, { FunctionComponent } from 'react';
import Text, { TextProps } from '../../../primitives/Text';

const InlineCode: FunctionComponent<InlineCodeProps> = ({ children, ...rest }) => {
  return (
    <Text
      as="code"
      backgroundColor="#1e1e1e"
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

export type InlineCodeProps = TextProps;
export default InlineCode;
