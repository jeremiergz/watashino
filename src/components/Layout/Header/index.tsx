import React from 'react';
import useTheme from '../../../hooks/useTheme';
import Box from '../../primitives/Box';
import NameAndJob from './NameAndJob';
import Navigation from './Navigation';

const Header = () => {
    const theme = useTheme();
    return (
        <Box
            display="flex"
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
        </Box>
    );
};

Header.displayName = 'Header';

export default Header;
