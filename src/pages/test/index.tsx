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
  const [store, setStore] = createStore<{ [key: string]: number[] }>({});
  const pageId = getCurPageId();

  createRenderEffect(() => {
    let fn1 = createSignal;
    let fn2 = createEffect;
    const num = count();
    const pageList = untrack(() => store[pageId]);
    console.warn(`test:>`, pageList);
    if (!pageList) {
      setStore(pageId, [num]);
    } else {
      setStore(pageId, [...pageList, num]);
    }
  });

  setTimeout(() => {
    setCount(count() + 1);
  }, 5000);

  return <View>test</View>;
}
