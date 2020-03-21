import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ description = '', keywords = [], lang = 'en', path = '', title }: SEO) => {
  const {
    banner,
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SEOData {
      banner: file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          resize(width: 512) {
            src
          }
        }
      }
      site {
        siteMetadata {
          description
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `);
  const metaDescription = description || siteMetadata.description;
  const siteUrl = siteMetadata.siteUrl;
  const imageUrl = `${siteUrl}${banner.childImageSharp.resize.src}`;
  const url = `${siteUrl}${path}`;
  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`%s | ${siteMetadata.title}`}>
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};

SEO.displayName = 'SEO';

export default SEO;
