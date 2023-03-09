// import { Image, View } from '@tarojs/components';
import { Button, Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { createSignal, Show } from 'solid-js';

import './index.less';

export default function Index() {
  console.warn(`test:>Index`);
  const [count, setCount] = createSignal(0);

  return (
    <View class="class1">
      {count()}
      <Button
        onClick={() => {
          setCount(count() + 1);
          if (count() == 5) {
            Taro.showToast({ title: `count() == 5`, icon: 'none' });
          }
        }}
      >
        click
      </Button>
      <Image src="https://www.baidu.com/img/pcdoodle_2a77789e1a67227122be09c5be16fe46.png" />
    </View>
  );
}
