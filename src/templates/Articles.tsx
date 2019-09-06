import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Box from '../components/primitives/Box';

type ArticlesProps = {
    data: GraphQL.ArticleQueryQuery;
};

const Articles = ({ data }: ArticlesProps) => {
    const {
        markdownRemark: {
            frontmatter: { date, keywords, title },
            html,
        },
    } = data;
    return (
        <Layout>
            <Layout.Content title={title} keywords={keywords.split(',')}>
                {date}
                <Box dangerouslySetInnerHTML={{ __html: html }} />
            </Layout.Content>
        </Layout>
    );
};

export const query = graphql`
    query ArticleQuery($path: String!) {
        markdownRemark(frontmatter: { slug: { eq: $path } }) {
            html
            frontmatter {
                date
                keywords
                title
            }
        }
    }
`;
export { ArticlesProps };
export default Articles;
