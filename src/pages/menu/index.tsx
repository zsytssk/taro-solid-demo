import { Button, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createSignal, onCleanup, Show } from 'solid-js';

import styles from './index.module.less';

export default function Menu() {
  const [count, setCount] = createSignal(0);

  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <View class={styles.menu}>
      <Show
        when={count() > 5}
        fallback={<Text>{count()} is not big than 5</Text>}
      >
        <Text>{count()} is big than 5</Text>
      </Show>
      <Button onClick={() => Taro.navigateBack()}>back</Button>
    </View>
  );
}
