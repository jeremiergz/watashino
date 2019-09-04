require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const packageJSON = require('./package.json');

module.exports = {
    siteMetadata: {
        author: packageJSON.author,
        description: packageJSON.description,
        title: 'Jeremie Rodriguez',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-transformer-json',
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                display: 'swap',
                fonts: ['Open+Sans:400,400i,600,600i,800,800i'],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                background_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/profile-pic.png',
                name: packageJSON.name,
                short_name: packageJSON.name,
                start_url: '/',
                theme_color: '#663399',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/content/data`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'articles',
                path: `${__dirname}/content/articles`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
    ],
};
