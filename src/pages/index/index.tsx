// import { Image, View } from '@tarojs/components';
import { Button, Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';
// import { useAppShow } from '../../hooks/useDidShow';
import { getPageInstance } from '@tarojs/runtime';
import { gotoWebPage } from '../webPage/utils';
import { useDidHide } from '@/hooks';

export default function Index(props) {
  const [data, setData] = createSignal<Renovation>();
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>index`, props);

  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  useDidHide(() => {
    console.log(`test:>hooks:>useDidHide`);
  });

  const homeConfig = createMemo(() => {
    return data()?.['home_page'];
  });

  requestData().then(res => {
    setData(res as any);
  });

  createEffect(() => {
    const inst = getPageInstance(props.tid);
    console.log(`test:>inst`, inst);
  });
  // useAppShow(() => {
  //   console.log(`test:>useAppShow`);
  // });

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
      <Button
        onClick={() => {
          gotoWebPage('#小程序://喜家德/TAVIzJOYLyPhinj');
        }}
      >
        webPage
      </Button>
      <SwiperBottom homeConfig={homeConfig} />
    </View>
  );
}
