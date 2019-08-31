import React from 'react';
import styled from 'styled-components';
import NameAndJob from './NameAndJob';
import Navigation from './Navigation';
import theme from '../../../theme';

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 16px;
    ${theme.breakpoints.minWidth.tablet} {
        flex-direction: row;
        justify-content: space-between;
        padding: 32px;
    }
`;

const HeaderComponent = () => (
    <Header>
        <NameAndJob />
        <Navigation />
    </Header>
);

HeaderComponent.displayName = 'Header';

export default HeaderComponent;
