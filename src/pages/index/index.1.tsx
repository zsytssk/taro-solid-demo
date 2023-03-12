// import { Image, View } from '@tarojs/components';
import { View } from '@tarojs/components';
import { createEffect, createSignal } from 'solid-js';

export default function Index() {
  let ref;
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>index`);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    console.log(`test:>`, ref);
  });

  return (
    <View class={`test${count()}`} ref={ref}>
      {count()}
    </View>
  );
}
