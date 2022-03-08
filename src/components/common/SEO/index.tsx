import useSEOData from '@/components/hooks/data/useSEOData';
import useSiteMetadata from '@/components/hooks/data/useSiteMetadata';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function SEO({ description = '', keywords = [], lang = 'en', path = '', title = 'My Website' }: SEOProps): JSX.Element {
  const { banner } = useSEOData();
  const { authorName, authorTwitterUsername, description: appDescription, siteUrl } = useSiteMetadata();

  const imageUrl = getSrc(banner);
  const fullTitle = `${title} | ${authorName}`;
  const metaDescription = description || appDescription;
  const url = `${siteUrl}${path}`;

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`%s | ${authorName}`}>
        <link rel="canonical" href={url} />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={imageUrl} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={authorTwitterUsername} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:title" content={fullTitle} />
      </Helmet>
    </HelmetProvider>
  );
}

export type SEOProps = {
  description?: string;
  keywords?: string[];
  lang?: string;
  path?: string;
  title?: string;
};
export default SEO;
