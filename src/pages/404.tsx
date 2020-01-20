import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Heading from '../components/common/Heading';
import Link from '../components/common/Link';
import Layout from '../components/core/Layout';
import { Routes } from '../utils/Routes';

const NotFoundPage = () => {
  const {
    pageData: { keywords, name },
  } = useStaticQuery<GraphQL.NotFoundPageQuery>(graphql`
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
