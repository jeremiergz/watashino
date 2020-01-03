import React from 'react';
import useTheme from '../../../hooks/useTheme';
import Flex from '../../primitives/Flex';
import NameAndJob from './NameAndJob';
import Navigation from './Navigation';

const Header = () => {
  const theme = useTheme();
  return (
    <Flex
      alignItems="center"
      as="header"
      flexDirection={{ _: 'column', tablet: 'row' }}
      justifyContent={{ _: 'flex-start', tablet: 'space-between' }}
      margin="auto"
      maxWidth={theme.breakpoints[5]}
      paddingX={{ _: 16, tablet: 32 }}
      paddingY={32}
    >
      <NameAndJob />
      <Navigation />
    </Flex>
  );
};

Header.displayName = 'Header';

export default Header;
