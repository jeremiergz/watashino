import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Routes } from 'utils/Routes';

const NotFoundPage: React.FC = () => {
  const {
    pageData: { keywords, name },
  } = useStaticQuery(graphql`
    query NotFoundPage {
      pageData: navigationJson(page: { eq: "NotFoundPage" }) {
        keywords
        name
      }
    }
  `);
  return (
    <Layout>
      <Layout.Content keywords={keywords} path={Routes.notFound} title={name} type="section">
        <Heading variant="h4">Man, I hate when this happens...</Heading>
        {'Find your way '}
        <Link to={Routes.aboutMe} variant="underlined">
          Home
        </Link>
      </Layout.Content>
    </Layout>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
