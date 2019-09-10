import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import Anchor from '../../../common/Anchor';
import Link from '../../../common/Link';
import Box from '../../../primitives/Box';
import Flex from '../../../primitives/Flex';
import BookIcon from '../../../svg/Book';
import DownloadIcon from '../../../svg/Download';
import HouseIcon from '../../../svg/House';
import MoodIcon from '../../../svg/Mood';

const iconsMapping = {
    book: BookIcon,
    home: HouseIcon,
    mood: MoodIcon,
};

const LinkContainer = ({ children, ...rest }: { children: ReactNode }) => (
    <Flex alignItems="center" flexDirection="column" justifyContent="center" minWidth={96} {...rest}>
        {children}
    </Flex>
);

const Navigation = () => {
    const {
        allNavigationJson: { nodes: links },
        dataJson: { resumeFile },
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
            dataJson {
                resumeFile
            }
        }
    `);
    return (
        <Flex as="nav" marginTop={{ _: 16, tablet: 0 }}>
            {links
                .filter(link => !link.ignoreInNavigation)
                .sort((a, b) => a.navOrder - b.navOrder)
                .map(link => (
                    <LinkContainer key={link.name}>
                        <Link alignItems="center" display="flex" flexDirection="column" partiallyActive to={link.to}>
                            <Box as={iconsMapping[link.icon]} height={32} width={32} />
                            {link.name}
                        </Link>
                    </LinkContainer>
                ))}
            <LinkContainer>
                <Anchor alignItems="center" display="flex" download flexDirection="column" href={resumeFile}>
                    <Box as={DownloadIcon} height={32} width={32} />
                    Resume
                </Anchor>
            </LinkContainer>
        </Flex>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;