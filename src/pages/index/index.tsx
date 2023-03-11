// import { Image, View } from '@tarojs/components';
import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createMemo, createSignal } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index() {
  const [data, setData] = createSignal<Renovation>();

  const homeConfig = createMemo(() => {
    return data()?.['home_page'];
  });

  requestData().then(res => {
    setData(res as any);
  });

  return (
    <View class={styles.index}>
      <SwiperTop homeConfig={homeConfig} />
      <Button
        onClick={() => {
          console.log(`test:>goto`);
          Taro.navigateTo({
            url: '/pages/menu/index',
          });
        }}
      >
        goto menu
      </Button>
      <SwiperBottom homeConfig={homeConfig} />
    </View>
  );
}
