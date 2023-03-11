import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createMemo } from 'solid-js';
import './app.less';

export default function App(props) {
  return createMemo(() => props?.pages);
}
// export default function App(props) {
//   const children = () => {
//     return props.pages;
//   };

//   global.doc = document;
//   global.taro = Taro;

//   return <>{children()}</>;
// }
