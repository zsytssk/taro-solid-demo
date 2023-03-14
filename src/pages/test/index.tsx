import { View } from '@tarojs/components';
import { TaroElement } from '@tarojs/runtime';
import { createSignal, onCleanup } from 'solid-js';
import {
  useDidShow,
  useLoad,
  useUnload,
  usePageScroll,
  useTitleClick,
  useDidHide,
} from '../../hooks';

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

  useDidShow(() => {
    console.log(`test:>hooks:>useDidShow`);
  });
  useDidHide(() => {
    console.log(`test:>hooks:>useDidHide`);
  });

  useLoad(() => {
    console.log(`test:>hooks:>useLoad`);
  });

  useUnload(() => {
    console.log(`test:>hooks:>useUnload`);
  });

  usePageScroll(() => {
    console.log(`test:>hooks:>usePageScroll`);
  });

  useTitleClick(() => {
    console.log(`test:>hooks:>useTitleClick`);
  });

  return (
    <View
      // use:clickOutside={(e) => console.log(`test:>clickOutside`)}
      onClick={() => {
        console.log(`test:>onClick`);
      }}
    >
      <View class="inner" style={{ height: 2000 }}>
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
    </View>
  );
}
