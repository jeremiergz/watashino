import React from 'react';
import { useTheming } from '..';
import Button from '../../../common/Button';
import Flex from '../../../primitives/Flex';
import Text from '../../../primitives/Text';
import Moon from '../../../svg/Moon';
import Sun from '../../../svg/Sun';

const iconMapping = {
  dark: Moon,
  light: Sun,
};

const ThemeToggle = () => {
  const { theme, toggle } = useTheming();
  const ThemeIcon = iconMapping[theme.type];
  return (
    <Button onClick={() => toggle()} position="absolute" right={3} top={3} variant="outlined" width={72}>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        <ThemeIcon height={20} width={20} />
        <Text color="gray" fontFamily={theme.fonts.main} fontSize={14}>
          {theme.type}
        </Text>
      </Flex>
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
