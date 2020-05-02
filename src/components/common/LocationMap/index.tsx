import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTheming } from '../../core/ThemingManager';
import Box from '../../primitives/Box';
import Image from '../Image';
import Link from '../Link';
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

const LocationMap: FunctionComponent = () => {
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
              fixed(height: 640) {
                ...GatsbyImageSharpFixed
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
        <StaticGMapImg alt="Location" fixed={locationMap} loading="eager" />
      </Link>
      <Box bottom={0} height={32} left={0} margin="auto" position="absolute" right={0} top={0} width={32}>
        <EmojiMarker onClick={handleMarkerClick} />
      </Box>
    </Box>
  );
};

LocationMap.displayName = 'LocationMap';

export default LocationMap;
