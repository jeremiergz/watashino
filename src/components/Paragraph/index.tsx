import Text, { TextProps } from 'components/primitives/Text';
import React from 'react';

const Paragraph: React.FC<ParagraphProps> = ({ children, ...rest }) => {
  return (
    <Text as="p" fontSize={20} marginY={4} textAlign={{ _: 'center', mobileL: 'justify' }} {...rest}>
      {children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';

export type ParagraphProps = TextProps;
export default Paragraph;
