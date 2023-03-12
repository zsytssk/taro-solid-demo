import { h, memo } from '@tarojs/plugin-framework-react/dist/runtime';
import { splitProps } from 'solid-js';

export function createComponent(name: string) {
  return (props?) => {
    const [local, otherProps] = splitProps(props, ['children']);
    let children = local.children;

    const descriptor = Object.getOwnPropertyDescriptor(local, 'children');
    if (typeof descriptor?.get === 'function') {
      children = memo(() => local.children);
    }

    return h(name, otherProps, children);
  };
}
