import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createMemo } from 'solid-js';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;

  return createMemo(() => props.children);
}
