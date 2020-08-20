import Image from 'components/Image';
import Link from 'components/Link';
import Box from 'components/primitives/Box';
import { useTheming } from 'components/providers/ThemeProvider';
import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import EmojiMarker from './EmojiMarker';

const StaticGMapImg = styled(Image)`
  max-height: 416px;
  width: 100% !important;
  border-radius: 8px;
  img {
    object-fit: none !important;
  }
  @media (min-width: 641px) {
    img {
      object-fit: cover !important;
    }
  }
`;

const LocationMap: React.FC = () => {
  const { mode } = useTheming();
  const handleMarkerClick = () => {
    trackCustomEvent({
      action: 'click',
      category: 'Google Maps Emoji Marker',
    });
  };
  const {
    gmapsImgs: { nodes: gmapsImgNodes },
  } = useStaticQuery(graphql`
    query LocationMapData {
      gmapsImgs: allStaticGmapsImage {
        nodes {
          childFile {
            childImageSharp {
              fixed(height: 640, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          mapURL
          theme
        }
      }
    }
  `);
  const gmapsImgNode = gmapsImgNodes.find(i => i.theme === mode) || gmapsImgNodes.find(i => i.theme === 'default');
  const locationMap = gmapsImgNode.childFile.childImageSharp.fixed;
  return (
    <Box position="relative">
      <Link external to={gmapsImgNode.mapURL}>
        <StaticGMapImg alt="Location" fixed={locationMap} />
      </Link>
      <Box bottom={0} height={32} left={0} margin="auto" position="absolute" right={0} top={0} width={32}>
        <EmojiMarker onClick={handleMarkerClick} />
      </Box>
    </Box>
  );
};

LocationMap.displayName = 'LocationMap';

export default LocationMap;
