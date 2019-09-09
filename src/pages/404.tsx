import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Heading from '../components/widgets/Heading';
import Link from '../components/widgets/Link';

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
            <Layout.Content keywords={keywords} title={name} type="section">
                <Heading variant="h4">Man, I hate when this happens...</Heading>
                {'Find your way '}
                <Link to="/about-me" variant="underlined">
                    Home
                </Link>
            </Layout.Content>
        </Layout>
    );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
