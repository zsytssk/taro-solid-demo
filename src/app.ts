import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createEffect, createMemo } from 'solid-js';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;

  createEffect(() => {
    console.log(`test:>app`, props.children());
  });

  return createMemo(() => props.children);
}
