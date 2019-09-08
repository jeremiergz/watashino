import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Header/Navigation';
import Layout from '../components/Layout';
import Box from '../components/primitives/Box';
import Link from '../components/widgets/Link';
import List from '../components/widgets/List';
import { getMonthAndDay } from '../utils/Date';

const postsNav = Navigation.links.posts;

const Groups = styled(Box)`
    > :first-child > label {
        margin-top: 0;
    }
`;

const PostsPage = () => {
    const {
        allMarkdownRemark: { nodes },
    } = useStaticQuery<GraphQL.PostsQueryQuery>(graphql`
        query PostsQuery {
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
    const allPosts: Record<string, Models.Post[]> = nodes.reduce((acc, node) => {
        const {
            frontmatter: { date: rawDate, slug, title },
        } = node;
        const date = new Date(rawDate);
        const year = date.getFullYear();
        const yearGroup = acc[year];
        const post = { date, slug, title };
        if (yearGroup) {
            acc[year].push(post);
        } else {
            acc[year] = [post];
        }
        return acc;
    }, {});
    return (
        <Layout>
            <Layout.Content keywords={postsNav.keywords} title={postsNav.name} type="section">
                <Groups>
                    {Object.keys(allPosts)
                        .sort((a, b) => b.localeCompare(a))
                        .map(year => (
                            <List key={year}>
                                <List.Label>{year}</List.Label>
                                {allPosts[year].map(({ date, slug, title }) => {
                                    const [month, day] = getMonthAndDay(date);
                                    const monthAndDay = `${month}-${day}`;
                                    return (
                                        <List.Item key={slug}>
                                            <Box
                                                as="span"
                                                color="primary"
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

PostsPage.displayName = 'PostsPage';

export default PostsPage;
