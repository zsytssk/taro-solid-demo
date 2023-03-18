import { View } from '@tarojs/components';
import { Accessor, createRenderEffect, JSXElement, Show } from 'solid-js';
import { renderModal } from '.';
import { useDelayShow } from './useDelayShow';
import { floor } from './utils';

import './index.less';

export enum TransitionType {
  /** 控制透明度进入 */
  FadeIn = 'fade-in',
  /** 放大进入 */
  ScaleIn = 'scale-in',
  /** 从右弹出 */
  SlideRightIn = 'slide-right-in',
  /** 底部向上弹出 */
  SlideBottomIn = 'slide-bottom-in',
}
export type Props = {
  visible: Accessor<boolean>;
  onClose?: () => void;
  className?: string;
  children: JSXElement;
  transTime?: number;
  /** 控制弹出动画 */
  transClass?: TransitionType;
};

export function Modal({
  visible,
  onClose,
  className,
  children: element,
  transTime = 300,
  transClass = TransitionType.FadeIn,
}: Props) {
  const show = useDelayShow(visible, transTime);

  return renderModal(
    <Show when={show()}>
      <View
        classList={{
          [className as string]: Boolean(className),
          'wui-modal-root': true,
        }}
      >
        <View
          style={{ animationDuration: floor(transTime / 1000, 2) + 's' }}
          classList={{
            ['wui-modal-mask']: true,
            hide: !visible(),
          }}
          onClick={() => {
            onClose?.();
          }}
        />
        <View
          style={{ animationDuration: floor(transTime / 1000, 2) + 's' }}
          classList={{
            ['wui-modal-wrap']: true,
            [transClass]: true,
            hide: !visible(),
          }}
        >
          {element}
        </View>
      </View>
    </Show>,
  );
}
