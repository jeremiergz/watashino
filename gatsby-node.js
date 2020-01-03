const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const {
    data: {
      allMarkdownRemark: { totalCount },
    },
  } = await graphql(`
    {
      allMarkdownRemark {
        totalCount
      }
    }
  `);
  if (totalCount > 0) {
    const {
      data: {
        mdData: { nodes: posts },
      },
      errors,
    } = await graphql(`
      {
        mdData: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
    if (errors) return reporter.panicOnBuild('Error while running GraphQL query');
    posts.forEach(({ frontmatter }, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].frontmatter.slug;
      const next = index === 0 ? null : posts[index - 1].frontmatter.slug;
      createPage({
        component: path.resolve('src/templates/Post.tsx'),
        context: {
          previous,
          next,
        },
        path: frontmatter.slug,
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter!
    }
    type Frontmatter {
        date: String!
        keywords: String!
        slug: String!
        tags: [String!]!
        title: String!
    }
  `;
  createTypes(typeDefs);
};
