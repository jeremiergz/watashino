import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Layout/Header/Navigation';
import Box from '../components/primitives/Box';
import Link from '../components/widgets/Link';
import List from '../components/widgets/List';
import { getMonthAndDay } from '../utils/Date';

const articlesNav = Navigation.links.articles;

const Groups = styled(Box)`
    > :first-child > label {
        margin-top: 0;
    }
`;

const ArticlesPage = () => {
    const {
        allMarkdownRemark: { nodes },
    } = useStaticQuery<GraphQL.ArticlesQueryQuery>(graphql`
        query ArticlesQuery {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                nodes {
                    frontmatter {
                        date
                        slug
                        title
                    }
                }
            }
        }
    `);
    const allArticles: Record<string, Models.Article[]> = nodes.reduce((acc, node) => {
        const {
            frontmatter: { date: rawDate, slug, title },
        } = node;
        const date = new Date(rawDate);
        const year = date.getFullYear();
        const yearGroup = acc[year];
        const article = { date, slug, title };
        if (yearGroup) {
            acc[year].push(article);
        } else {
            acc[year] = [article];
        }
        return acc;
    }, {});
    return (
        <Layout>
            <Layout.Content title={articlesNav.name} keywords={articlesNav.keywords}>
                <Groups>
                    {Object.keys(allArticles)
                        .sort((a, b) => b.localeCompare(a))
                        .map(year => (
                            <List key={year}>
                                <List.Label>{year}</List.Label>
                                {allArticles[year].map(({ date, slug, title }) => {
                                    const [month, day] = getMonthAndDay(date);
                                    const monthAndDay = `${month}-${day}`;
                                    return (
                                        <List.Item key={slug}>
                                            <Box
                                                as="span"
                                                color="secondary"
                                                fontSize={16}
                                                fontWeight="bold"
                                                marginRight={4}
                                                marginTop="2px"
                                                minWidth={64}
                                            >
                                                {monthAndDay}
                                            </Box>
                                            <Link to={slug}>{title}</Link>
                                        </List.Item>
                                    );
                                })}
                            </List>
                        ))}
                </Groups>
            </Layout.Content>
        </Layout>
    );
};

ArticlesPage.displayName = 'ArticlesPage';

export default ArticlesPage;
