import { Text, View } from '@tarojs/components';
import { Modal, Props as ModalProps } from '../Modal/Modal';

import styles from './index.module.less';

export type Props = {
  tip?: string;
} & Omit<ModalProps, 'children' | 'onClose'>;

export function ModalLoading({ tip, transTime = 100, ...otherProps }: Props) {
  return (
    <Modal
      className={styles.modalLoading}
      transTime={transTime}
      {...otherProps}
    >
      <View class="lds-circle"></View>
      <Text>{tip || '正在加载...'}</Text>
    </Modal>
  );
}
