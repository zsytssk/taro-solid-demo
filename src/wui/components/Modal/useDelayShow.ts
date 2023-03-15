import {
  Accessor,
  createMemo,
  createRenderEffect,
  createSignal,
  onCleanup,
} from 'solid-js';

/** 在isIn=false之后+transTime返回false */
export function useDelayShow(show: Accessor<boolean>, delayTime = 300) {
  let hasEnterRef = false;
  const [localShow, setLocalShow] = createSignal(false);

  createRenderEffect(() => {
    const isShow = show();
    if (isShow) {
      setLocalShow(true);
    }
  });

  createRenderEffect(() => {
    const isShow = show();
    if (!hasEnterRef && !isShow) {
      return;
    }

    hasEnterRef = isShow;
    const timeout = setTimeout(() => {
      if (!isShow) {
        setLocalShow(false);
      }
    }, delayTime);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });

  return createMemo(() => {
    return show() || localShow();
  });
}
