import React, { HTMLAttributes } from 'react';
import Text from '../../primitives/Text';

type Props = HTMLAttributes<HTMLParagraphElement> & {};

const ParagraphComponent = ({ children, ...rest }: Props) => {
    return (
        <Text as="p" fontSize={20} textAlign="left" {...rest}>
            {children}
        </Text>
    );
};

ParagraphComponent.displayName = 'Paragraph';

export default ParagraphComponent;
