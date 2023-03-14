import { document, getPageInstance } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { useDidShow, useError, useLaunch, usePageNotFound } from './hooks';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;
  global.getPageInstance = getPageInstance;

  useLaunch(options => {
    console.log(`test:>hooks:>useLaunch`, options);
  });

  useDidShow(options => {
    console.log(`test:>hooks:>useDidShow`, options);
  });

  usePageNotFound(options => {
    console.log(`test:>hooks:>usePageNotFound`, options);
  });

  useError(options => {
    console.log(`test:>hooks:>useError`, options);
  });

  return props.children;
}
