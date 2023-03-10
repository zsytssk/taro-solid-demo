import { h } from '@tarojs/plugin-framework-react/dist/render';
import { createMemo } from 'solid-js';

export function createComponent(name: string) {
  return (props?) => {
    const { children, ...otherProps } = props;
    const childList = createMemo(() => props.children);
    return h(name, otherProps, childList);
  };
}
