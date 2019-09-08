import React from 'react';
import Flex from '../../primitives/Flex';
import BookIcon from '../../svg/Book';
import MoodIcon from '../../svg/Mood';
import Item from './Item';

const links = {
    home: {
        ignoreInNavigation: true,
        keywords: ['contact', 'gatsby', 'react'],
        name: 'Home',
        to: '/',
    },
    posts: {
        icon: BookIcon,
        keywords: ['posts', 'gatsby', 'react'],
        name: 'Posts',
        to: '/posts',
    },
    aboutMe: {
        icon: MoodIcon,
        keywords: ['about', 'gatsby', 'react'],
        name: 'About Me',
        to: '/about-me',
    },
    notFound: {
        ignoreInNavigation: true,
        keywords: ['404', 'gatsby', 'react'],
        name: '404 Not Found',
        to: '/',
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
