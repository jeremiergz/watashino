import Text, { TextProps } from 'components/primitives/Text';
import { useTheming } from 'components/providers/ThemeProvider';
import React from 'react';
import { lightenColor } from 'utils/CSS';

const Chip: React.FC<ChipProps> = ({ children, color, ...rest }) => {
  const { theme } = useTheming();
  const fontColor = color || theme.colors.gray;
  const backgroundColor = lightenColor(fontColor, 0.25);
  return (
    <Text
      as="span"
      backgroundColor={backgroundColor}
      borderRadius={12}
      color={fontColor}
      fontSize={12}
      fontWeight="semiBold"
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

export type ChipProps = Omit<TextProps, 'color'> & {
  color?: string;
};
export default Chip;
