import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadataQueryResponse = {
  site: {
    siteMetadata: {
      authorName: string;
      authorTwitterUsername: string;
      color: string;
      description: string;
      keywords: string[];
      license: string;
      name: string;
      repositoryUrl: string;
      siteUrl: string;
      version: string;
    };
  };
};

function useSiteMetadata(): SiteMetadataQueryResponse['site']['siteMetadata'] {
  const rawData = useStaticQuery<SiteMetadataQueryResponse>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          authorName
          authorTwitterUsername
          color
          description
          keywords
          license
          name
          repositoryUrl
          siteUrl
          version
        }
      }
    }
  `);

  return rawData.site.siteMetadata;
}

export type { SiteMetadataQueryResponse };
export default useSiteMetadata;
