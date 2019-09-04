const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query');
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve('src/templates/Articles.tsx'),
            context: {},
        });
    });
};
