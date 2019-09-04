import React from 'react';
import theme from '../../../../theme';
import Text, { TextProps } from '../../../primitives/Text';

type LabelProps = TextProps;

const Label = ({ children, ...rest }: LabelProps) => {
    return (
        <Text
            as="label"
            color={theme.colors.primary}
            display="block"
            fontSize={32}
            fontWeight={theme.fonts.main.weight.bold}
            marginBottom={4}
            marginTop={5}
            marginX={0}
            {...rest}
        >
            {children}
        </Text>
    );
};

export { LabelProps };
export default Label;
