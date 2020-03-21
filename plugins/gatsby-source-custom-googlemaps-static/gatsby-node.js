const path = require('path');
const querystring = require('querystring');
const { createFileNode } = require('gatsby-source-filesystem/create-file-node');
const { cacheDir, format, gmapsAPIURL, nodeType, plugin, size, staticGmapsAPIURL } = require('./config');
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
    await downloadFile(url, filePath);
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

    const mapURL = `${gmapsAPIURL}&center=${urlOptions.center}&zoom=${urlOptions.zoom || 4}`;

    if (styles && typeof styles === 'object') {
      await Promise.all(
        Object.keys(styles).map(theme => {
          const style = encodeStyleParams(styles[theme]);
          const content = { ...options, styles: style };
          const contentDigest = createContentDigest(content);
          const filePath = path.join(filesDirectory, `${cacheDigest}-${theme}.${format}`);
          const id = createNodeId(`${plugin}-${contentDigest}`);
          const queryParams = querystring.stringify({ format, size, ...urlOptions });
          const url = `${staticGmapsAPIURL}?${queryParams}${style}`;
          return processNode({
            createNode,
            createNodeId,
            content,
            contentDigest,
            filePath,
            id,
            mapURL,
            shouldDownload,
            theme,
            url,
          });
        }),
      );
    } else {
      const content = { ...options };
      const contentDigest = createContentDigest(content);
      const filePath = path.join(filesDirectory, `${cacheDigest}-default.${format}`);
      const id = createNodeId(`${plugin}-${contentDigest}`);
      const queryParams = querystring.stringify({ format, size, ...urlOptions });
      const theme = 'default';
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
        theme,
        url,
      });
    }
    await cache.set('optionsDigest', cacheDigest);
  } catch (err) {
    reporter.panic(err);
  }
};
