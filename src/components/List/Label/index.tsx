import Text, { TextProps } from 'components/primitives/Text';
import React from 'react';

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <Text
      as="label"
      color="secondary"
      display="block"
      fontSize={32}
      fontWeight="semiBold"
      marginBottom={4}
      marginTop={5}
      marginX={0}
      {...rest}
    >
      {children}
    </Text>
  );
};

Label.displayName = 'ListLabel';

export type LabelProps = TextProps;
export default Label;
