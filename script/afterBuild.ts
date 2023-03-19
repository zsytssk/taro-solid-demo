const copyPrivateConfig = require('./task/copyPrivateConfig');
const setDefaultPage = require('./task/setDefaultPage');

module.exports = async function afterBuild(ctx) {
  if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'h5') {
    await setDefaultPage(ctx.paths.outputPath);
  }

  // 复制自付宝 微信 本地配置文件
  await copyPrivateConfig(ctx);

  // if (
  //   process.env.NODE_ENV === 'production' &&
  //   process.env.TARO_ENV === 'alipay'
  // ) {
  //   await fixAlipayAppAcss(ctx.paths.outputPath);
  // }
};
