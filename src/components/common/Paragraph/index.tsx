import React from 'react';
import Text, { TextProps } from '../../primitives/Text';

type ParagraphProps = TextProps;

const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return (
    <Text as="p" fontSize={20} marginY={4} textAlign={{ _: 'center', mobileL: 'left' }} {...rest}>
      {children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';

export { ParagraphProps };
export default Paragraph;
