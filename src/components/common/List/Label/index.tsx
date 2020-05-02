import React, { FunctionComponent } from 'react';
import Text, { TextProps } from '../../../primitives/Text';

const Label: FunctionComponent<LabelProps> = ({ children, ...rest }) => {
  return (
    <Text
      as="label"
      color="secondary"
      display="block"
      fontSize={32}
      fontWeight="semi-bold"
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
