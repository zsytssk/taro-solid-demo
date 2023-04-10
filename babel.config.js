// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  env: {
    development: {
      plugins: [
        [
          'solid-refresh/babel',
          {
            bundler: 'webpack5', // or "rspack-esm"
          },
        ],
      ],
    },
  },
  presets: [
    '@babel/preset-env',
    [
      'babel-preset-solid',
      {
        moduleName: '@tarojs/solid',
        generate: 'universal',
      },
    ],
    '@babel/preset-typescript',
  ],
};
