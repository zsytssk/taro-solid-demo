import { View } from '@tarojs/components';

import { ModalLoading } from '../ModalLoading';
import { useMinTimeShow } from './useMinTimeShow';

import { Accessor, JSXElement, Show } from 'solid-js';
import './spin.less';

type Props = {
  spin: Accessor<boolean>;
  children?: JSXElement;
  delay?: number;
  transTime?: number;
  /** 默认进入动画
   * - 默认为 fade-in
   */
  animate?: boolean;
  className?: string;
  showLoading?: boolean;
};

export function Spin({
  children,
  spin,
  animate = true,
  className = '',
  delay = 500,
  transTime = 300,
  showLoading = true,
}: Props) {
  const isSpin = useMinTimeShow(spin, delay);

  return (
    <View
      classList={{
        'wui-spin': true,
        'fade-in': animate,
        'fade-in-enter': animate && !isSpin(),
        [className]: true,
      }}
      style={{ transitionDuration: `${transTime}ms` }}
    >
      <Show when={showLoading}>
        <ModalLoading visible={isSpin} transTime={transTime} />
      </Show>
      {children}
    </View>
  );
}
