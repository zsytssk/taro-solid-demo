import { createSignal, Show } from 'solid-js';
import { Button, View } from '../../components';

import './index.less';

export default function Index() {
  console.warn(`test:>Index`);
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  return (
    <view class="class1">
      <Show when={count() > 5} fallback={<text>{count()} 小于 5</text>}>
        <input />
        <text>{count()} is bigger than 5</text>
      </Show>
      {/* <text>this is a test {count()}</text> */}
    </view>
  );
  return (
    <view>
      <View class="class1">this is a test {count()}</View>
      {/* <Button>werwer{count()}</Button>
      <view
        id="test"
        class="test1"
        onTouchStart={() => {
          console.log(`test:>onclick`);
        }}
      >
        click
      </view> */}
    </view>
  );
}
