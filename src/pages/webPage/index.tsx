import { View, WebView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createEffect, createSignal } from 'solid-js';

import styles from './index.module.less';

export default function WebPage() {
  const [url, setUrl] = createSignal('');

  createEffect(() => {
    const params = Taro.getCurrentInstance().router?.params as {
      url?: string;
    };
    setUrl(params.url || '');
  });

  createEffect(() => {
    console.log(`test:>`, url());
  });

  return (
    <View class={styles.webPage}>
      <WebView src={url()} />
    </View>
  );
}
