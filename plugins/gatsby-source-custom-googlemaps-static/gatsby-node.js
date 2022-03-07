const { unlink } = require('fs/promises');
const { createFileNode } = require('gatsby-source-filesystem/create-file-node');
const path = require('path');
const sharp = require('sharp');
const { cacheDir, format, gmapsAPIURL, nodeType, plugin, scale, size, staticGmapsAPIURL } = require('./config');
const { downloadFile, encodeStyleParams, error } = require('./utils');

async function processNode({
  createNode,
  createNodeId,
  content,
  contentDigest,
  filePath,
  id,
  mapURL,
  shouldDownload,
  theme = null,
  url,
}) {
  if (shouldDownload) {
    const tempFilePath = filePath.replace('.png', '_temp.png');
    await downloadFile(url, tempFilePath);
    await sharp(tempFilePath).extract({ height: 1200, left: 40, top: 40, width: 1200 }).toFile(filePath);
    await unlink(tempFilePath);
  }

  const fileNode = await createFileNode(filePath, createNodeId, {});
  fileNode.parent = id;

  await createNode(fileNode, { name: 'gatsby-source-filesystem' });
  await createNode({
    children: [fileNode.id],
    id,
    internal: {
      content: JSON.stringify(content),
      contentDigest,
      type: nodeType,
    },
    mapURL,
    parent: null,
    theme,
  });
}

exports.sourceNodes = async ({ actions, cache, createContentDigest, createNodeId, reporter, store }, options) => {
  try {
    const { createNode } = actions;
    const { getState } = store;
    delete options.plugins;
    const { styles, ...urlOptions } = options;
    const filesDirectory = path.join(getState().program.directory, cacheDir, plugin);

    if (!urlOptions.center) return reporter.panic(error('is missing center parameter'));
    if (!urlOptions.key) return reporter.panic(error('is missing key parameter'));

    const previousCacheDigest = await cache.get('optionsDigest');
    const cacheDigest = createContentDigest(options);
    const shouldDownload = cacheDigest !== previousCacheDigest;

    const mapURL = `${gmapsAPIURL}&center=${urlOptions.center}&zoom=${urlOptions.url.zoom || 4}`;

    if (styles && Array.isArray(styles)) {
      const style = encodeStyleParams(styles);
      const content = { ...options, styles: style };
      const contentDigest = createContentDigest(content);
      const filePath = path.join(filesDirectory, `${cacheDigest}.${format}`);
      const id = createNodeId(`${plugin}-${contentDigest}`);
      const queryParams = new URLSearchParams({ format, size, ...urlOptions });
      const url = `${staticGmapsAPIURL}?${queryParams}${style}&scale=2`;

      await processNode({
        createNode,
        createNodeId,
        content,
        contentDigest,
        filePath,
        id,
        mapURL,
        shouldDownload,
        url,
      });
    } else {
      const content = { ...options };
      const contentDigest = createContentDigest(content);
      const filePath = path.join(filesDirectory, `${cacheDigest}.${format}`);
      const id = createNodeId(`${plugin}-${contentDigest}`);
      const queryParams = new URLSearchParams({ format, scale, size, ...urlOptions });
      const url = `${staticGmapsAPIURL}?${queryParams}`;

      await processNode({
        createNode,
        createNodeId,
        content,
        contentDigest,
        filePath,
        id,
        mapURL,
        shouldDownload,
        url,
      });
    }

    await cache.set('optionsDigest', cacheDigest);
  } catch (err) {
    reporter.panic(err);
  }
};
