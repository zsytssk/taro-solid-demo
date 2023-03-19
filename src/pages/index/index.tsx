import { Block, Button, Input, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  getOwner,
} from 'solid-js';
import { SwiperBottom } from './components/swiperBottom';
import SwiperTop from './components/swiperTop';

import { ModalManager } from '@/wui/components/Modal';
import { Modal } from '@/wui/components/Modal/Modal';
import styles from './index.module.less';
import { Renovation, requestData } from './testData';
import { Spin } from '@/wui/components/Spin/Spin';

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
    <View class={styles.index} ref={ref}>
      <Spin spin={spin}>
        <SwiperTop homeConfig={homeConfig} />
        <Block>
          <Button
            onClick={() => {
              Taro.navigateTo({
                url: '/pages/menu/index',
              });
            }}
          >
            goto menu
          </Button>

          <Input
            onInput={e => {
              console.log(`test:>`, (e.target as any).value);
            }}
          />
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
        </Block>
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
