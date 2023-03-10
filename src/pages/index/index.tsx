// import { Image, View } from '@tarojs/components';
import { Button, Image, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createSignal } from 'solid-js';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index() {
  const [count, setCount] = createSignal(0);
  const [data, setData] = createSignal<Renovation>();
  const homeConfig = () => {
    return data()?.['home_page'];
  };
  requestData().then(res => {
    setData(res as any);
  });

  return (
    <View class={styles.index}>
      <SwiperTop homeConfig={homeConfig} />
    </View>
  );
}
