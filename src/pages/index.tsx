import { navigate, useStaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

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
        navigate('/about-me');
    }, []);
    return (
        <Layout>
            <Layout.Content keywords={keywords} type="section" />
        </Layout>
    );
};

IndexPage.displayName = 'IndexPage';

export default IndexPage;
