// import { Image, View } from '@tarojs/components';
import { View } from '@tarojs/components';
import { TaroNode } from '@tarojs/runtime';
import { createEffect, createSignal } from 'solid-js';

export default function Test() {
  let ref: TaroNode;
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>test`);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    console.log(`test:>`, ref);
  });

  return (
    <View class={`test${count()}`} ref={ref!}>
      {count()}
    </View>
  );
}
