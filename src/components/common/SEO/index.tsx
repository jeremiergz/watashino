import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
  description?: string;
  keywords?: string[];
  lang?: string;
  meta?: [];
  title: string;
};

function buildMeta({
  author,
  keywords,
  meta,
  metaDescription,
  title,
}: {
  author: string;
  keywords: string[];
  meta: [];
  metaDescription: string;
  title: string;
}) {
  return [
    { content: 'summary', name: 'twitter:card' },
    { content: 'website', property: 'og:type' },
    { content: author, name: 'twitter:creator' },
    { content: metaDescription, name: 'description' },
    { content: metaDescription, name: 'twitter:description' },
    { content: metaDescription, property: 'og:description' },
    { content: title, name: 'twitter:title' },
    { content: title, property: 'og:title' },
  ]
    .concat(keywords.length > 0 ? { content: keywords.join(', '), name: 'keywords' } : [])
    .concat(meta);
}

const SEO = ({ description = '', keywords = [], lang = 'en', meta = [], title }: SEOProps) => {
  const data = useStaticQuery<GraphQL.SeoDataQuery>(graphql`
    query SEOData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const metaDescription = description || data.site.siteMetadata.description;
  const metadata = buildMeta({ author: data.site.siteMetadata.author, keywords, meta, metaDescription, title });
  return (
    <Helmet
      htmlAttributes={{ lang }}
      meta={metadata}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    />
  );
};

SEO.displayName = 'SEO';

export { SEOProps };
export default SEO;
