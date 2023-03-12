// import { Image, View } from '@tarojs/components';
import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index() {
  const [data, setData] = createSignal<Renovation>();
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>index`);
  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  const homeConfig = createMemo(() => {
    return data()?.['home_page'];
  });

  requestData().then(res => {
    setData(res as any);
  });

  return (
    <View class={styles.index}>
      <Text>{count()}</Text>
      <SwiperTop homeConfig={homeConfig} />
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/menu/index',
          });
        }}
      >
        goto menu
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/test/index',
          });
        }}
      >
        goto test
      </Button>
      <SwiperBottom homeConfig={homeConfig} />
    </View>
  );
}
