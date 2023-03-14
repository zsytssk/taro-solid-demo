import { View } from '@tarojs/components';
import { TaroElement } from '@tarojs/runtime';
import Taro from '@tarojs/taro';
import { createEffect, createSignal, onCleanup } from 'solid-js';
import {
  useDidShow,
  useLoad,
  useUnload,
  usePageScroll,
  useTitleClick,
  useDidHide,
  useReachBottom,
  useAddToFavorites,
  useOptionMenuClick,
  useShareTimeline,
  useReady,
  useRouter,
} from '../../hooks';

export default function Test() {
  let ref: TaroElement;
  const [count, setCount] = createSignal(0);

  const router = useRouter();

  console.log(`test:>page:>test`, router());

  createEffect(() => {
    Taro.showShareMenu?.({
      withShareTicket: true,
    });
  });

  const interval = setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });

  useReady(() => {
    console.log(`test:>hooks:>useReady`);
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

  useReachBottom(() => {
    console.log(`test:>hooks:>useReachBottom`);
  });

  useTitleClick(() => {
    console.log(`test:>hooks:>useTitleClick`);
  });

  useAddToFavorites(() => {
    console.log(`test:>hooks:>useAddToFavorites`);
  });

  useOptionMenuClick(() => {
    console.log(`test:>hooks:>useAddToFavorites`);
  });

  useShareTimeline(() => {
    console.log(`test:>hooks:>useShareTimeline`);
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
