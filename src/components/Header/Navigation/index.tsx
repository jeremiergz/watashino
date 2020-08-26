import Link from 'components/Link';
import FlexBox from 'components/primitives/FlexBox';
import { useTheme } from 'components/providers/ThemeProvider';
import SVG from 'components/SVG';
import BookIcon from 'components/svgs/icons/Book';
import DescriptionIcon from 'components/svgs/icons/Description';
import HouseIcon from 'components/svgs/icons/House';
import MoodIcon from 'components/svgs/icons/Mood';
import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { Routes } from 'utils/Routes';

const iconsMapping = {
  book: BookIcon,
  home: HouseIcon,
  mood: MoodIcon,
};

const Navigation: React.FC = () => {
  const { theme } = useTheme();
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
    <FlexBox as="nav" flexWrap="wrap" justifyContent="center" marginTop={{ _: 16, tablet: 0 }}>
      {links
        .filter(link => {
          if (link.to === Routes.posts && totalCount === 0) return false;
          return !link.ignoreInNavigation;
        })
        .sort((a, b) => a.navOrder - b.navOrder)
        .map(link => (
          <FlexBox alignItems="center" flexDirection="column" justifyContent="center" key={link.name} minWidth={96}>
            <Link alignItems="center" display="flex" flexDirection="column" partiallyActive to={link.to}>
              <SVG as={iconsMapping[link.icon]} fill={theme.colors.text} />
              {link.name}
            </Link>
          </FlexBox>
        ))}
      <FlexBox alignItems="center" flexDirection="column" justifyContent="center" minWidth={96}>
        <Link
          alignItems="center"
          display="flex"
          external
          flexDirection="column"
          onClick={handleResumeClick}
          to={resumeLink}
        >
          <SVG as={DescriptionIcon} fill={theme.colors.text} />
          Resume
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
