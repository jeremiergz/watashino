import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import Link from '../components/common/Link';
import List from '../components/common/List';
import Layout from '../components/core/Layout';
import Box from '../components/primitives/Box';
import { getMonthAndDay } from '../utils/Date';
import { Routes } from '../utils/Routes';

const Groups = styled(Box)`
  > :first-child > label {
    margin-top: 0;
  }
`;

const PostsPage: FunctionComponent = () => {
  const {
    mdData: { nodes },
    pageData: { keywords, name },
  } = useStaticQuery(graphql`
    query PostsPage {
      mdData: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date
            slug
            title
          }
        }
      }
      pageData: navigationJson(page: { eq: "PostsPage" }) {
        keywords
        name
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
  const allPostsKeys = Object.keys(allPosts);
  useEffect(() => {
    if (allPostsKeys.length === 0) navigate(Routes.notFound);
  }, [allPostsKeys]);
  return (
    <Layout>
      {allPostsKeys.length > 0 && (
        <Layout.Content keywords={keywords} path={Routes.posts} title={name} type="section">
          <Groups>
            {allPostsKeys
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
      )}
    </Layout>
  );
};

PostsPage.displayName = 'PostsPage';

export default PostsPage;
