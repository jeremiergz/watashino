require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const { location } = require('./content/data/personal-details.json');
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
        allExtensions: true,
        isTSX: true,
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
      resolve: 'gatsby-source-custom-googlemaps-static',
      options: {
        center: `${location.lat},${location.lng}`,
        key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
        styles: {
          dark: [
            { element: 'geometry', rules: { color: '0x31859a' } },
            { element: 'labels.text.fill', rules: { color: '0x746855' } },
            { element: 'labels.text.stroke', rules: { color: '0x242f3e' } },
            { element: 'labels.text.fill', feature: 'administrative.locality', rules: { color: '0xd59563' } },
            { element: 'labels.text.fill', feature: 'poi', rules: { color: '0xd59563' } },
            { element: 'geometry', feature: 'poi.park', rules: { color: '0x263c3f' } },
            { element: 'labels.text.fill', feature: 'poi.park', rules: { color: '0x6b9a76' } },
            { element: 'geometry', feature: 'road', rules: { color: '0x38414e' } },
            { element: 'geometry.stroke', feature: 'road', rules: { color: '0x212a37' } },
            { element: 'labels.text.fill', feature: 'road', rules: { color: '0x9ca5b3' } },
            { element: 'geometry', feature: 'road.highway', rules: { color: '0x746855' } },
            { element: 'geometry.stroke', feature: 'road.highway', rules: { color: '0x1f2835' } },
            { element: 'labels.text.fill', feature: 'road.highway', rules: { color: '0xf3d19c' } },
            { element: 'geometry', feature: 'transit', rules: { color: '0x2f3948' } },
            { element: 'labels.text.fill', feature: 'transit.station', rules: { color: '0xd59563' } },
            { element: 'geometry', feature: 'water', rules: { color: '0x17263c' } },
          ],
          light: [
            { element: 'geometry', rules: { color: '0xebe3cd' } },
            { element: 'labels.text.fill', rules: { color: '0x523735' } },
            { element: 'labels.text.stroke', rules: { color: '0xf5f1e6' } },
            { element: 'geometry.stroke', feature: 'administrative', rules: { color: '0xc9b2a6' } },
            { element: 'geometry.stroke', feature: 'administrative.land_parcel', rules: { color: '0xdcd2be' } },
            { element: 'labels.text.fill', feature: 'administrative.land_parcel', rules: { color: '0xae9e90' } },
            { element: 'geometry', feature: 'landscape.natural', rules: { color: '0xdfd2ae' } },
            { element: 'geometry', feature: 'poi', rules: { color: '0xdfd2ae' } },
            { element: 'labels.text.fill', feature: 'poi', rules: { color: '0x93817c' } },
            { element: 'geometry.fill', feature: 'poi.park', rules: { color: '0xa5b076' } },
            { element: 'labels.text.fill', feature: 'poi.park', rules: { color: '0x447530' } },
            { element: 'geometry', feature: 'road', rules: { color: '0xf5f1e6' } },
            { element: 'geometry', feature: 'road.arterial', rules: { color: '0xfdfcf8' } },
            { element: 'geometry', feature: 'road.highway', rules: { color: '0xf8c967' } },
            { element: 'geometry.stroke', feature: 'road.highway', rules: { color: '0xe9bc62' } },
            { element: 'geometry', feature: 'road.highway.controlled_access', rules: { color: '0xe98d58' } },
            { element: 'geometry.stroke', feature: 'road.highway.controlled_access', rules: { color: '0xdb8555' } },
            { element: 'labels.text.fill', feature: 'road.local', rules: { color: '0x806b63' } },
            { element: 'geometry', feature: 'transit.line', rules: { color: '0xdfd2ae' } },
            { element: 'labels.text.fill', feature: 'transit.line', rules: { color: '0x8f7d77' } },
            { element: 'labels.text.stroke', feature: 'transit.line', rules: { color: '0xebe3cd' } },
            { element: 'geometry', feature: 'transit.station', rules: { color: '0xdfd2ae' } },
            { element: 'geometry', feature: 'water', rules: { color: '0x31859a' } },
            { element: 'labels.text.fill', feature: 'water', rules: { color: '0x92998d' } },
          ],
        },
        zoom: 4,
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
            },
          },
        ],
      },
    },
  ],
};
