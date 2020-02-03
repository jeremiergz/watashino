require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const packageJSON = require('./package.json');

const { author, description, homepage, license, name, repository, version } = packageJSON;
const appColor = '#17365C';
const appName = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const authorName = 'Jeremie Rodriguez';
const twitterUsername = '@JeremieRgz';

module.exports = {
  siteMetadata: {
    appName,
    author,
    description,
    license,
    repository,
    siteUrl: homepage,
    title: authorName,
    twitterUsername,
    version,
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        cookieDomain: process.env.GOOGLE_ANALYTICS_COOKIE_DOMAIN,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
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
        display: 'standalone',
        icon: 'src/images/profile-pic.png',
        name: `${authorName} - ${appName}`,
        short_name: appName,
        start_url: '/',
        theme_color: appColor,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        debug: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
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
        name: 'googlemaps',
        path: `${__dirname}/content/gmaps`,
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
              theme: 'Dark+ (default dark)',
              wrapperClassName: 'code',
            },
          },
        ],
      },
    },
  ],
};
