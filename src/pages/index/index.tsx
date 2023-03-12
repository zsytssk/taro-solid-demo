// import { Image, View } from '@tarojs/components';
import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createEffect, createMemo, createSignal } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index() {
  let ref;
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>index`);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    console.log(`test:>`, ref);
  });

  return (
    <View class={`test${count()}`} ref={ref}>
      {count()}
    </View>
  );
}
