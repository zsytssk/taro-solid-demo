import { document } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import './app.less';

// export default function App(props) {
//   return props?.children;
// }
export default function App(props) {
  const children = () => {
    console.log(`test:>children`, props.pages);
    return props.pages;
  };

  global.doc = document;
  global.taro = Taro;

  return <>{children()}</>;
}
