import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createEffect } from 'solid-js';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;

  createEffect(() => {
    console.log(`test:>app`, props.children());
  });

  return props.children;
}
