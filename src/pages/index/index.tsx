// import { Image, View } from '@tarojs/components';
import { Button, Text, View } from '@tarojs/components';
import { createSignal, Show } from 'solid-js';

import './index.less';

export default function Index() {
  console.warn(`test:>Index`);
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  return (
    <View class="class1">
      <Show when={count() > 5} fallback={<text>{count()} 小于 5</text>}>
        <Button onClick={() => console.log(`test:>1`)}>click</Button>
        <Text>{count()} is bigger than 5</Text>
      </Show>
      {/* <Image src="https://www.baidu.com/img/pcdoodle_2a77789e1a67227122be09c5be16fe46.png" /> */}
    </View>
  );
}
