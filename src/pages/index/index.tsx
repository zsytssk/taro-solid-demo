// import { Image, View } from '@tarojs/components';
import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createMemo, createSignal, onCleanup, useContext } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';
import { PageContext } from '@tarojs/plugin-framework-react/dist/runtime';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index(props) {
  const context = useContext(PageContext);
  const [data, setData] = createSignal<Renovation>();
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>index`, props, context);
  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

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
