// import { Image, View } from '@tarojs/components';
import { View } from '@tarojs/components';
import { TaroNode } from '@tarojs/runtime';
import { createSignal, onCleanup } from 'solid-js';

export default function Test() {
  let ref: TaroNode;
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>test`);

  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <View class={`test${count()}`} ref={ref!}>
      {count()}
    </View>
  );
}
