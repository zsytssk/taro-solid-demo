const getLocalEnv = require('./getLocalEnv');
const path = require('path');
const { cpFile } = require('../utils');

/** copy微信支付宝本地配置文件 */
module.exports = async function copyPrivateConfig(ctx) {
  const localEnv = await getLocalEnv();
  const TARO_ENV = process.env.TARO_ENV;
  if (localEnv.wxPrivateConfig && TARO_ENV === 'weapp') {
    const { appPath, outputPath } = ctx.paths;
    const srcPath = path.resolve(appPath, 'project.private.config.json');
    const distPath = path.resolve(outputPath, 'project.private.config.json');
    await cpFile(srcPath, distPath);
  }

  if (localEnv.alipayMinConfig && TARO_ENV === 'alipay') {
    const { appPath, outputPath } = ctx.paths;
    const srcPath = path.resolve(appPath, 'mini.project.json');
    const distPath = path.resolve(outputPath, 'mini.project.json');
    await cpFile(srcPath, distPath);
  }
};
