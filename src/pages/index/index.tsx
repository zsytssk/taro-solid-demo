import { Button, View } from '@tarojs/components';
import { createEffect, createMemo, createSignal, getOwner } from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import { ModalManager } from '@/wui/components/Modal';
import { Modal } from '@/wui/components/Modal/Modal';
import { Spin } from '@/wui/components/Spin/Spin';
import { Center } from './components/center';
import styles from './index.module.less';
import { Renovation, requestData } from './testData';

export default function Index(props) {
  const [data, setData] = createSignal<Renovation>();
  const [visible, setVisible] = createSignal(false);
  const [spin, setSpin] = createSignal(true);
  let ref;

  createEffect(() => {
    console.log(`test:>ref`, ref);
  });

  console.log(`test:>page:>index`, getOwner());

  const homeConfig = createMemo(() => {
    return data()?.['home_page'];
  });

  requestData().then(res => {
    setData(res as any);
  });

  setTimeout(() => {
    setSpin(false);
  }, 1000);

  return (
    <View class={styles.index} ref={ref} style={{ background: 'red' }}>
      <Spin spin={spin}>
        <SwiperTop homeConfig={homeConfig} />
        <Center />
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          showModal
        </Button>
        <SwiperBottom homeConfig={homeConfig} />
      </Spin>

      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        className={styles.modal}
      >
        <View>this is a modal</View>
      </Modal>
      <ModalManager />
    </View>
  );
}
