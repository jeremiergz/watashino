import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Box from '../../primitives/Box';
import Flex from '../../primitives/Flex';
import BookIcon from '../../svg/Book';
import HouseIcon from '../../svg/House';
import MoodIcon from '../../svg/Mood';
import Link from '../../widgets/Link';

const iconsMapping = {
    book: BookIcon,
    home: HouseIcon,
    mood: MoodIcon,
};

const Navigation = () => {
    const {
        allNavigationJson: { nodes: links },
    } = useStaticQuery<GraphQL.NavigationDataQuery>(graphql`
        query NavigationData {
            allNavigationJson {
                nodes {
                    icon
                    ignoreInNavigation
                    keywords
                    name
                    navOrder
                    to
                }
            }
        }
    `);
    return (
        <Flex as="nav" marginTop={{ _: 16, tablet: 0 }}>
            {links
                .filter(link => !link.ignoreInNavigation)
                .sort((a, b) => a.navOrder - b.navOrder)
                .map(link => (
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        key={link.name}
                        justifyContent="center"
                        minWidth={96}
                    >
                        <Link alignItems="center" display="flex" flexDirection="column" partiallyActive to={link.to}>
                            <Box as={iconsMapping[link.icon]} height={32} width={32} />
                            {link.name}
                        </Link>
                    </Flex>
                ))}
        </Flex>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;
