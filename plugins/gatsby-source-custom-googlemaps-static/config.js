const cacheDir = '.cache';
const format = 'png';
const gmapsAPIURL = 'https://www.google.com/maps/@?api=1&map_action=map';
const nodeType = 'StaticGmapsImage';
const plugin = 'gatsby-source-custom-googlemaps-static';
const size = '640x640';
const staticGmapsAPIURL = 'https://maps.googleapis.com/maps/api/staticmap';

module.exports = {
  cacheDir,
  format,
  gmapsAPIURL,
  nodeType,
  plugin,
  size,
  staticGmapsAPIURL,
};
