// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    '@babel/preset-env',
    [
      'babel-preset-solid',
      {
        moduleName: '@tarojs/plugin-framework-react/dist/runtime',
        generate: 'universal',
      },
    ],
    '@babel/preset-typescript',
  ],
};
