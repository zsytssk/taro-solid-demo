const path = require('path');
const getLocalEnv = require('./getLocalEnv');
const { readFile, writeFile } = require('../utils');

/** 设置env.json中默认首页 */
module.exports = async function setDefaultPage(dist) {
  const env = await getLocalEnv();
  const appJson = path.resolve(dist, 'app.json');
  const index = env.index;
  if (!index) {
    return;
  }
  const appJsonStr = await readFile(appJson);
  const app = JSON.parse(appJsonStr);
  const { pages } = app;

  if (pages.indexOf(index) === -1) {
    return;
  }
  app.pages = [...new Set([index, ...pages])];
  await writeFile(appJson, JSON.stringify(app));
  console.log(`setDefaultPage: ${index}  success!`);
};
