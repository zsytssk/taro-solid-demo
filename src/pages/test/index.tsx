import { getCurPageId } from '@/wui/taroUtils/utils';
import { View } from '@tarojs/components';
import { createSignal } from 'solid-js';

export default function Test() {
  const [count, setCount] = createSignal(0);
  const pageId = getCurPageId();

  setTimeout(() => {
    setCount(count() + 1);
  }, 5000);

  return <View>test</View>;
}
