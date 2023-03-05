import { createEffect, createSignal } from 'solid-js';

import './index.less';

export default function Index() {
  console.warn(`test:>Index`);
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);
  // return (
  //   <button>
  //     <text>this is a test</text>
  //   </button>
  // );

  createEffect(() => {
    console.log(`test:>`, count());
  });

  return (
    <view>
      <view class="class1">
        <text>this is a test {count()}</text>
      </view>
      <button>click</button>
      <view
        onClick={() => {
          console.log(`test:>onclick`);
        }}
      >
        click
      </view>
    </view>
  );
}
