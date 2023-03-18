import { getCurPageId } from '@/wui/taroUtils/utils';
import { View } from '@tarojs/components';
import {
  createEffect,
  createRenderEffect,
  createSignal,
  untrack,
} from 'solid-js';
import { createStore } from 'solid-js/store';

export default function Test() {
  const [count, setCount] = createSignal(0);
  const pageId = getCurPageId();

  createRenderEffect(() => {
    let fn1 = createSignal;
    let fn2 = createEffect;
    const num = count();
    console.warn(`test:>`, fn1, fn2);
  });

  setTimeout(() => {
    setCount(count() + 1);
  }, 5000);

  return <View>test</View>;
}
