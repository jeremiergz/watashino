import React from 'react';
import Text, { TextProps } from '../../../primitives/Text';

type LabelProps = TextProps;

const Label = ({ children, ...rest }: LabelProps) => {
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

export { LabelProps };
export default Label;
