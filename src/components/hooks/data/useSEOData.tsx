import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type SEODataQueryResponse = {
  banner: IGatsbyImageData;
};

function useSEOData(): SEODataQueryResponse {
  const rawData = useStaticQuery<SEODataQueryResponse>(graphql`
    query SEOData {
      banner: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP, AVIF], height: 630, placeholder: BLURRED, quality: 100, width: 1200)
        }
      }
    }
  `);

  return rawData;
}

export type { SEODataQueryResponse };
export default useSEOData;
