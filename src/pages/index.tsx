import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import Layout from '../components/core/Layout';
import { Routes } from '../utils/Routes';

const IndexPage = () => {
  const {
    pageData: { keywords },
  } = useStaticQuery<GraphQL.IndexPageQuery>(graphql`
    query IndexPage {
      pageData: navigationJson(page: { eq: "NotFoundPage" }) {
        keywords
        name
      }
    }
  `);
  useEffect(() => {
    navigate(Routes.aboutMe);
  }, []);
  return (
    <Layout>
      <Layout.Content keywords={keywords} type="section" />
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
