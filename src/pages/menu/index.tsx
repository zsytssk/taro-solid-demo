import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import styles from './index.module.less';

export default function Menu() {
  return (
    <View class={styles.menu}>
      <Button onClick={() => Taro.navigateBack()}>back</Button>
    </View>
  );
}
