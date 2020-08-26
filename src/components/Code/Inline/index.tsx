import Text, { TextProps } from 'components/primitives/Text';
import { useTheme } from 'components/providers/ThemeProvider';
import React from 'react';

const InlineCode: React.FC<InlineCodeProps> = ({ children, ...rest }) => {
  const { theme } = useTheme();
  return (
    <Text
      as="code"
      backgroundColor={theme.type === 'dark' ? 'lightgray' : 'vsCodeDark'}
      borderRadius={8}
      color={theme.type === 'dark' ? 'black' : 'white'}
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
