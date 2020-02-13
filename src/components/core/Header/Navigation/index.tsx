import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { Routes } from '../../../../utils/Routes';
import Link from '../../../common/Link';
import Svg from '../../../common/Svg';
import Flex from '../../../primitives/Flex';
import BookIcon from '../../../svg/Book';
import DescriptionIcon from '../../../svg/Description';
import HouseIcon from '../../../svg/House';
import MoodIcon from '../../../svg/Mood';
import SkillIcon from '../../../svg/Skill';

const iconsMapping = {
  book: BookIcon,
  home: HouseIcon,
  mood: MoodIcon,
  skill: SkillIcon,
};

const Navigation = () => {
  const {
    allMarkdownRemark: { totalCount },
    allNavigationJson: { nodes: links },
    dataJson: { resumeLink },
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
        resumeLink
      }
    }
  `);
  const handleResumeClick = () => {
    trackCustomEvent({
      action: 'click',
      category: 'Open Resume',
    });
  };
  return (
    <Flex as="nav" flexWrap="wrap" justifyContent="center" marginTop={{ _: 16, tablet: 0 }}>
      {links
        .filter(link => {
          if (link.to === Routes.posts && totalCount === 0) return false;
          return !link.ignoreInNavigation;
        })
        .sort((a, b) => a.navOrder - b.navOrder)
        .map(link => (
          <Flex alignItems="center" flexDirection="column" justifyContent="center" key={link.name} minWidth={96}>
            <Link alignItems="center" display="flex" flexDirection="column" partiallyActive to={link.to}>
              <Svg as={iconsMapping[link.icon]} />
              {link.name}
            </Link>
          </Flex>
        ))}
      <Flex alignItems="center" flexDirection="column" justifyContent="center" minWidth={96}>
        <Link
          alignItems="center"
          display="flex"
          external
          flexDirection="column"
          onClick={handleResumeClick}
          to={resumeLink}
        >
          <Svg as={DescriptionIcon} />
          Resume
        </Link>
      </Flex>
    </Flex>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
