const path = require('path');
const { readFile, writeFile } = require('../utils');

module.exports = async function fixAlipayAppAcss(dist) {
  const appCss = path.resolve(dist, 'app.acss');
  /** @type {string} */
  let appJsonStr = await readFile(appCss);
  appJsonStr = appJsonStr.replace(
    '@import "./common.acss";',
    '\n@import "./common.acss";',
  );
  await writeFile(appCss, appJsonStr);
  console.log(`fixAlipayAppCss: ${appCss}  success!`);
};
