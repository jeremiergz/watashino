const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query');
        return;
    }
    const posts = result.data.allMarkdownRemark.nodes;
    posts.forEach(({ frontmatter }, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].frontmatter.slug;
        const next = index === 0 ? null : posts[index - 1].frontmatter.slug;
        createPage({
            component: path.resolve('src/templates/Posts.tsx'),
            context: {
                previous,
                next,
            },
            path: frontmatter.slug,
        });
    });
};
