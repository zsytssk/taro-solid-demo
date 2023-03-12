const afterBuild = require('./afterBuild');

export default (ctx, pluginOpts) => {
  // 接下来使用 ctx 的时候就能获得智能提示了
  // ctx.onBuildStart(() => {
  //   console.log('编译开始！');
  // });

  ctx.onBuildFinish(async () => {
    await afterBuild(ctx);
  });
  // ctx.onBuildComplete(async () => {
  //   console.log('afterBuild 构建完成！');
  // });
};
