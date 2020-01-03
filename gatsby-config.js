require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const packageJSON = require('./package.json');

const { author, description, homepage, license, name, repository, version } = packageJSON;
const appColor = '#17365C';
const appName = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const authorName = 'Jeremie Rodriguez';

module.exports = {
    siteMetadata: {
        author,
        description,
        license,
        repository,
        title: authorName,
        siteUrl: homepage,
        version,
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
                background_color: appColor,
                display: 'minimal-ui',
                icon: 'src/images/profile-pic.png',
                name: `${authorName} - ${appName}`,
                short_name: appName,
                start_url: '/',
                theme_color: appColor,
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
