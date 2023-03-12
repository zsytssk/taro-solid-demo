import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';

export default function App(props) {
  global.taro = Taro;
  global.doc = document;

  return props.children;
}
