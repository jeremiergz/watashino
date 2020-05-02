import React, { FunctionComponent } from 'react';
import { Theme } from '../../../theme';
import { lightenColor } from '../../../utils/CSS';
import { useTheming } from '../../core/ThemingManager';
import Text, { TextProps } from '../../primitives/Text';

const Chip: FunctionComponent<ChipProps> = ({ children, color, ...rest }) => {
  const { theme } = useTheming();
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

export type ChipProps = Omit<TextProps, 'color'> & {
  color?: string;
};
export default Chip;
