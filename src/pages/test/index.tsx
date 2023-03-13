import { View } from '@tarojs/components';
import { TaroElement } from '@tarojs/runtime';
import { createSignal, onCleanup } from 'solid-js';

export default function Test() {
  let ref: TaroElement;
  const [count, setCount] = createSignal(0);

  console.log(`test:>page:>test`);

  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <View
      // use:clickOutside={(e) => console.log(`test:>clickOutside`)}
      onClick={() => {
        console.log(`test:>onClick`);
      }}
    >
      hei
      <View
        ref={ref!}
        classList={{
          [`test${count()}`]: true,
        }}
      >
        {count()}
      </View>
    </View>
  );
}
