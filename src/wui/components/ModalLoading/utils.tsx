import { ModalLoading } from '.';

export let state: { key?: string; tip?: string } = {};
export function setState(props: typeof state) {
  state = {
    ...state,
    ...props,
  };
}
export function clearState() {
  state = {};
}
export const nodeRef: { current: JSX.Element | undefined } = {
  current: undefined,
};
export const nodeFn = (visible: boolean, onClose?: () => void) => {
  return (
    <ModalLoading
      key={state.key}
      tip={state.tip}
      renderNode={false}
      visible={visible}
      onClosed={onClose}
    />
  );
};
