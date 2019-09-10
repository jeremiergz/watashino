require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const packageJSON = require('./package.json');

const { author, description, homepage, name } = packageJSON;
const appName = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const authorName = 'Jeremie Rodriguez';

module.exports = {
    siteMetadata: {
        author: author,
        description: description,
        title: authorName,
        siteUrl: homepage,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-transformer-json',
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
                background_color: '#17365C',
                display: 'minimal-ui',
                icon: 'src/images/profile-pic.png',
                name: `${authorName} - ${appName}`,
                short_name: appName,
                start_url: '/',
                theme_color: '#31859A',
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
                name: 'packageJSON',
                path: `${__dirname}/package.json`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 768,
                            quality: 75,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-vscode',
                        options: {
                            colorTheme: 'Dark+ (default dark)',
                            languageAliases: {},
                        },
                    },
                ],
            },
        },
    ],
};
