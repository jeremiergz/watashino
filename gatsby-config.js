require('dotenv/config');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const { description, homepage, keywords, license, name, repository, version } = require('./package.json');
const tailwindConfig = require('./tailwind.config');

const information = yaml.load(fs.readFileSync('./content/data/information/index.yaml', 'utf8'));

const colorAccent = tailwindConfig.theme.extend.colors['accent'];
const colorPrimary = tailwindConfig.theme.extend.colors['primary'];
const colorPrimaryDark = tailwindConfig.theme.extend.colors['primary-dark'];
const colorText = tailwindConfig.theme.extend.colors['text'];

const APP_COLOR = colorPrimaryDark;
const APP_DESCRIPTION = description;
const APP_KEYWORDS = keywords;
const APP_LICENSE = license;
const APP_NAME = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const APP_REPOSITORY_URL = repository.url.replace(/git\+|\.git/gi, '');
const APP_SITE_URL = homepage;
const APP_VERSION = version;
const AUTHOR_NAME = 'Jeremie Rodriguez';
const AUTHOR_TWITTER_USERNAME = '@JeremieRgz';

[
  ['APP_COLOR', APP_COLOR],
  ['APP_DESCRIPTION', APP_DESCRIPTION],
  ['APP_KEYWORDS', APP_KEYWORDS],
  ['APP_LICENSE', APP_LICENSE],
  ['APP_NAME', APP_NAME],
  ['APP_REPOSITORY_URL', APP_REPOSITORY_URL],
  ['APP_SITE_URL', APP_SITE_URL],
  ['APP_VERSION', APP_VERSION],
  ['AUTHOR_NAME', AUTHOR_NAME],
  ['AUTHOR_TWITTER_USERNAME', AUTHOR_TWITTER_USERNAME],
].forEach(([name, value]) => {
  if (!value) throw new Error(`${name} is not defined`);
});

module.exports = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    authorName: AUTHOR_NAME,
    authorTwitterUsername: AUTHOR_TWITTER_USERNAME,
    color: APP_COLOR,
    description: APP_DESCRIPTION,
    keywords: APP_KEYWORDS,
    license: APP_LICENSE,
    name: APP_NAME,
    repositoryUrl: APP_REPOSITORY_URL,
    siteUrl: APP_SITE_URL,
    version: APP_VERSION,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: APP_COLOR,
        cache_busting_mode: 'none',
        display: 'standalone',
        icon: 'logo.png',
        icons: [
          {
            sizes: '36x36',
            src: '/icons/android-icon-36x36.png',
            type: 'image/png',
          },
          {
            sizes: '48x48',
            src: '/icons/android-icon-48x48.png',
            type: 'image/png',
          },
          {
            sizes: '72x72',
            src: '/icons/android-icon-72x72.png',
            type: 'image/png',
          },
          {
            sizes: '96x96',
            src: '/icons/android-icon-96x96.png',
            type: 'image/png',
          },
          {
            sizes: '144x144',
            src: '/icons/android-icon-144x144.png',
            type: 'image/png',
          },
          {
            sizes: '192x192',
            src: '/icons/android-icon-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: '/icons/android-icon-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: '/icons/maskable-icon.png',
            type: 'image/png',
          },
        ],
        name: AUTHOR_NAME,
        short_name: AUTHOR_NAME,
        start_url: '/',
        theme_color: APP_COLOR,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-source-custom-googlemaps-static',
      options: {
        center: `${information.geolocation.lat},${information.geolocation.lng}`,
        key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
        styles: [
          { element: 'geometry', rules: { color: colorAccent.replace('#', '0x') } },
          { element: 'geometry', feature: 'water', rules: { color: colorPrimary.replace('#', '0x') } },
          { element: 'labels.text.fill', rules: { color: '0x9ca3af' } },
          { element: 'labels.text.fill', feature: 'administrative.locality', rules: { color: colorText.replace('#', '0x') } },
          { element: 'labels.text.stroke', rules: { color: '0x171717', weight: 2 } },
        ],
        url: {
          zoom: 10,
        },
        zoom: 4,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`,
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
  ],
};
