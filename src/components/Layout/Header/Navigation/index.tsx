import React from 'react';
import styled from 'styled-components';
import theme from '../../../../theme';
import BookIcon from '../../../svg/Book';
import HouseIcon from '../../../svg/House';
import MoodIcon from '../../../svg/Mood';
import Item from './Item';

const Navigation = styled.div`
    display: flex;
    margin-top: 16px;
    ${theme.breakpoints.minWidth.tablet} {
        margin-top: 0;
    }
`;

const links = {
    home: {
        icon: HouseIcon,
        name: 'Home',
        to: '/',
        keywords: ['contact', 'gatsby', 'react'],
    },
    articles: {
        icon: BookIcon,
        name: 'Articles',
        to: '/articles',
        keywords: ['articles', 'gatsby', 'react'],
    },
    aboutMe: {
        icon: MoodIcon,
        name: 'About Me',
        to: '/about-me',
        keywords: ['about', 'gatsby', 'react'],
    },
    notFound: {
        name: '404 Not Found',
        to: '/',
        keywords: ['404', 'gatsby', 'react'],
        ignoreInNavigation: true,
    },
};

const NavigationComponent = () => {
    return (
        <Navigation>
            {Object.keys(links)
                .filter(key => !links[key].ignoreInNavigation)
                .map(key => {
                    const link = links[key];
                    return <Item key={link.name} link={link} />;
                })}
        </Navigation>
    );
};

NavigationComponent.displayName = 'Navigation';
NavigationComponent.links = links;

export default NavigationComponent;
