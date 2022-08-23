const fs = require('fs/promises');
const path = require('path');
const tailwindConfig = require('./tailwind.config');

const colorPrimaryDark = tailwindConfig.theme.extend.colors['primary-dark'];
const publicFolder = 'public';

exports.onPostBuild = async ({ reporter }) => {
  const browserconfig = `
<?xml version="1.0" encoding="UTF-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/ms-icon-70x70.png" />
      <square150x150logo src="/ms-icon-150x150.png" />
      <square310x310logo src="/ms-icon-310x310.png" />
      <TileColor>${colorPrimaryDark}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`.trim();

  const browserconfigPath = path.join(publicFolder, 'browserconfig.xml');

  try {
    await fs.writeFile(path.resolve(__dirname, browserconfigPath), browserconfig, 'utf-8');
    reporter.info(`Generated ${browserconfigPath}`);
  } catch (err) {
    reporter.error(`Could not generate ${browserconfigPath}`);
  }
};
