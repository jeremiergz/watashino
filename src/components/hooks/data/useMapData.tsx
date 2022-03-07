import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type MapQueryResponse = {
  staticGmapsImage: {
    childFile: {
      childImageSharp: IGatsbyImageData;
    };
    mapURL: string;
  };
};

function useMapData(): MapQueryResponse['staticGmapsImage'] {
  const rawData = useStaticQuery<MapQueryResponse>(graphql`
    query MapData {
      staticGmapsImage {
        childFile {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF], height: 1152, placeholder: BLURRED, quality: 100, width: 1152)
          }
        }
        mapURL
      }
    }
  `);

  return rawData.staticGmapsImage;
}

export type { MapQueryResponse };
export default useMapData;
