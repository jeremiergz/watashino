import React from 'react';
import Flex from '../../primitives/Flex';
import BookIcon from '../../svg/Book';
import HouseIcon from '../../svg/House';
import MoodIcon from '../../svg/Mood';
import Item from './Item';

const links = {
    home: {
        icon: HouseIcon,
        name: 'Home',
        to: '/',
        keywords: ['contact', 'gatsby', 'react'],
    },
    posts: {
        icon: BookIcon,
        name: 'Posts',
        to: '/posts',
        keywords: ['posts', 'gatsby', 'react'],
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

const Navigation = () => {
    return (
        <Flex as="nav" marginTop={{ _: 16, tablet: 0 }}>
            {Object.keys(links)
                .filter(key => !links[key].ignoreInNavigation)
                .map(key => {
                    const link = links[key];
                    return <Item key={link.name} link={link} />;
                })}
        </Flex>
    );
};

Navigation.displayName = 'Navigation';

Navigation.links = links;

export default Navigation;
