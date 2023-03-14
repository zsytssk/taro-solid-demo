import { document, getPageInstance } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createEffect } from 'solid-js';
import { useDidShow, useLaunch } from './hooks';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;
  global.getPageInstance = getPageInstance;

  createEffect(() => {
    console.log(`test:>app`, props, props.children());
  });

  useLaunch(options => {
    console.log(`test:>hooks:>useLaunch`, options);
  });

  useDidShow(options => {
    console.log(`test:>hooks:>useDidShow`, options);
  });

  return props.children;
}
