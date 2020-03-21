const fs = require('fs');
const https = require('https');
const path = require('path');
const querystring = require('querystring');
const { plugin } = require('./config');

/**
 * Downloads file using only native packages.
 *
 * @param url the source file URL
 * @param filePath the destination file path
 */
function downloadFile(url, filePath) {
  return new Promise(async (resolve, reject) => {
    https
      .get(url, res => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Request failed: ${res.statusCode} ${res.statusMessage}`));
        } else {
          fs.mkdir(path.dirname(filePath), { recursive: true }, () => {
            res
              .pipe(fs.createWriteStream(filePath))
              .on('close', () => resolve())
              .on('error', err => reject(err));
          });
        }
      })
      .on('error', err => reject(err));
  });
}

/**
 * Accepts a Google Static Maps API styles array, formats & encodes it & returns a query parameters string.
 *
 * @param styles array of styles
 */
function encodeStyleParams(styles) {
  return styles.reduce((acc, style) => {
    const toAdd = [];
    if (style.feature) toAdd.push(`feature:${style.feature}`);
    if (style.element) toAdd.push(`element:${style.element}`);
    if (style.rules) Object.keys(style.rules).forEach(rule => toAdd.push(`${rule}:${style.rules[rule]}`));
    if (toAdd.length > 0) acc += `&${querystring.stringify({ style: toAdd.join('|') })}`;
    return acc;
  }, '');
}

/**
 * Returns a formated custom error.
 *
 * @param message
 */
function error(message) {
  return new Error(`The ${plugin} plugin ${message}`);
}

module.exports = {
  downloadFile,
  encodeStyleParams,
  error,
};
