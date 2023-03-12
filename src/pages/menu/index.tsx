import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createEffect, createSignal, onCleanup } from 'solid-js';

import styles from './index.module.less';

export default function Menu() {
  let ref;
  const [count, setCount] = createSignal(0);
  const [count1, setCount1] = createSignal(0);
  console.log(`test:>page:>menu`);

  const interval1 = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  const interval2 = setInterval(() => {
    setCount1(count1() + 1);
    onCleanup(() => {
      clearInterval(interval1);
      clearInterval(interval2);
    });
  }, 3000);

  createEffect(() => {
    console.log(`test:>count`, count());
  });

  createEffect(() => {
    console.log(`test:>count1`, count1());
  });

  onCleanup(() => {
    clearInterval(interval1);
    clearInterval(interval2);
  });

  return (
    <View class={styles.menu} ref={ref}>
      <View class="test2">
        {count()}---{count1()}
      </View>
      <Button onClick={() => Taro.navigateBack()}>back</Button>
    </View>
  );
}
