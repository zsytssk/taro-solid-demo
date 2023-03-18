import {
  Accessor,
  createMemo,
  createRenderEffect,
  createSignal,
  onCleanup,
} from 'solid-js';

/** 当show变为false时有一个最小的时间间隔
 * @param show
 * @param minTime 最小时间间隔 ms
 */
export function useMinTimeShow(show: Accessor<boolean>, minTime = 300) {
  let timeoutRef;
  const [localShow, setLocalShow] = createSignal(false);

  createRenderEffect(() => {
    const isShow = show();
    if (!isShow) {
      return;
    }
    setLocalShow(true);
    clearTimeout(timeoutRef);
    timeoutRef = (setTimeout(() => {
      setLocalShow(false);
    }, minTime) as unknown) as number;
  });

  onCleanup(() => {
    return () => {
      clearTimeout(timeoutRef);
    };
  });

  return createMemo(() => {
    return localShow() || show();
  });
}
