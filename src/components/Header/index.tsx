import FlexBox from 'components/primitives/FlexBox';
import { useTheme } from 'components/providers/ThemeProvider';
import React from 'react';
import NameAndJob from './NameAndJob';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <FlexBox
      alignItems="center"
      as="header"
      flexDirection={{ _: 'column', tablet: 'row' }}
      justifyContent={{ _: 'flex-start', tablet: 'space-between' }}
      margin="auto"
      maxWidth={theme.breakpoints[5]}
      paddingBottom={32}
      paddingTop={{ _: 32, tablet: 48 }}
      paddingX={{ _: 16, tablet: 32 }}
    >
      <NameAndJob />
      <Navigation />
    </FlexBox>
  );
};

Header.displayName = 'Header';

export default Header;
