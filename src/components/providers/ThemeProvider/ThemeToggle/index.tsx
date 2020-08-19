import Button from 'components/Button';
import FlexBox from 'components/primitives/FlexBox';
import Text from 'components/primitives/Text';
import MoonIcon from 'components/svg/Moon';
import SunIcon from 'components/svg/Sun';
import React from 'react';
import { useTheming } from '..';

const iconMapping = {
  dark: MoonIcon,
  light: SunIcon,
};

const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheming();
  const ThemeIcon = iconMapping[theme.type];
  return (
    <Button onClick={() => toggle()} position="absolute" right={3} top={3} variant="outlined" width={72}>
      <FlexBox alignItems="center" justifyContent="space-between" width="100%">
        <ThemeIcon height={20} width={20} />
        <Text color="gray" fontFamily={theme.fonts.main} fontSize={14}>
          {theme.type}
        </Text>
      </FlexBox>
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
