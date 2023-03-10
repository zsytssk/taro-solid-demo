import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createMemo, createSignal, getOwner } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import styles from './index.module.less';
import { Renovation, requestData } from './testData';
import { ModalManager } from '@/wui/components/Modal';
import { Modal } from '@/wui/components/Modal/Modal';

export default function Index(props) {
  const [data, setData] = createSignal<Renovation>();
  const [count, setCount] = createSignal(0);
  const [visible, setVisible] = createSignal(false);

  console.log(`test:>page:>index`, getOwner());

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
          setVisible(true);
        }}
      >
        showModal
      </Button>
      <SwiperBottom homeConfig={homeConfig} />
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <View>this is a modal</View>
      </Modal>
      <ModalManager />
    </View>
  );
}
