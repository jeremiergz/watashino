import React from 'react';
import useTheme from '../../../hooks/useTheme';
import { Theme } from '../../../theme';
import { lightenColor } from '../../../utils/CSS';
import Text, { TextProps } from '../../primitives/Text';

type ChipProps = Omit<TextProps, 'color'> & {
    color?: string;
};

const Chip = ({ children, color, ...rest }: ChipProps) => {
    const theme = useTheme();
    const fontColor = (color || theme.colors.gray) as keyof Theme['colors'];
    const backgroundColor = lightenColor(fontColor, 0.25);
    return (
        <Text
            as="span"
            backgroundColor={backgroundColor}
            borderRadius={12}
            color={fontColor}
            fontSize={12}
            fontWeight="semi-bold"
            lineHeight="12px"
            maxHeight={12}
            paddingBottom={1}
            paddingTop="3px"
            paddingX={2}
            {...rest}
        >
            {children}
        </Text>
    );
};

Chip.displayName = 'Chip';

export { ChipProps };
export default Chip;
