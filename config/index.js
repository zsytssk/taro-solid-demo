const path = require('path');
const taroPlugin = path.resolve(__dirname, '../script/taroPlugin.ts');

const env = process.env.TARO_ENV;
var outputRoot = '';
switch (env) {
  case 'weapp':
    outputRoot = 'dist';
    break;
  case 'alipay':
    outputRoot = 'dist_alipay';
    break;
  case 'h5':
    outputRoot = 'dist_h5';
    break;
  case 'tt':
    outputRoot = 'dist_tt';
    break;
  default:
    outputRoot = 'dist';
}

const config = {
  projectName: 'minapp-solid-test',
  date: '2023-3-3',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },

  sourceRoot: 'src',
  outputRoot: outputRoot,
  plugins: [taroPlugin],
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  defineConstants:
    env === 'alipay'
      ? {
          globalThis: '""',
        }
      : {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'solid',
  compiler: 'webpack5',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    // webpackChain(chain, webpack) {
    //   // console.log(`test:>webpack`, webpack);
    //   chain.merge({
    //     watchOptions: {
    //       // ignored: /node_modules([\\]+|\/)+(?!\@tarojs)/,
    //       ignored: ['/node_modules1/(?!@tarojs/.+)/'],
    //     },
    //   });
    // },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
