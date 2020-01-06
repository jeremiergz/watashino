import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import Anchor from '../../../common/Anchor';
import Link from '../../../common/Link';
import Svg from '../../../common/Svg';
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
  <Flex alignItems="center" flexDirection="column" justifyContent="center" minWidth={96}>
    {children}
  </Flex>
);

const Navigation = () => {
  const {
    allMarkdownRemark: { totalCount },
    allNavigationJson: { nodes: links },
    dataJson: { resumeFile },
  } = useStaticQuery<GraphQL.NavigationDataQuery>(graphql`
    query NavigationData {
      allMarkdownRemark {
        totalCount
      }
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
        .filter(link => {
          if (link.to === '/posts' && totalCount === 0) return false;
          return !link.ignoreInNavigation;
        })
        .sort((a, b) => a.navOrder - b.navOrder)
        .map(link => (
          <LinkContainer key={link.name}>
            <Link alignItems="center" display="flex" flexDirection="column" partiallyActive to={link.to}>
              <Svg as={iconsMapping[link.icon]} />
              {link.name}
            </Link>
          </LinkContainer>
        ))}
      <LinkContainer>
        <Anchor alignItems="center" display="flex" download flexDirection="column" href={resumeFile}>
          <Svg as={DownloadIcon} />
          Resume
        </Anchor>
      </LinkContainer>
    </Flex>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
