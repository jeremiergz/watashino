import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

type Props = {
    data: GraphQL.ArticleQueryQuery;
};

const Articles = ({ data }: Props) => {
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
                <div dangerouslySetInnerHTML={{ __html: html }} />
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
export default Articles;
