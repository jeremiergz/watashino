import Layout from 'components/Layout';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { Routes } from 'utils/Routes';

const IndexPage: React.FC = () => {
  const {
    pageData: { keywords },
  } = useStaticQuery(graphql`
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
      <Layout.Content keywords={keywords} path="" type="section" />
    </Layout>
  );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
