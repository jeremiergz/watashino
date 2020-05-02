import React, { FunctionComponent } from 'react';
import Text, { TextProps } from '../../primitives/Text';

const Paragraph: FunctionComponent<ParagraphProps> = ({ children, ...rest }) => {
  return (
    <Text as="p" fontSize={20} marginY={4} textAlign={{ _: 'center', mobileL: 'left' }} {...rest}>
      {children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';

export type ParagraphProps = TextProps;
export default Paragraph;
