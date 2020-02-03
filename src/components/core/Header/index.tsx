import React from 'react';
import Flex from '../../primitives/Flex';
import { useTheming } from '../ThemingManager';
import NameAndJob from './NameAndJob';
import Navigation from './Navigation';

const Header = () => {
  const { theme } = useTheming();
  return (
    <Flex
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
    </Flex>
  );
};

Header.displayName = 'Header';

export default Header;
