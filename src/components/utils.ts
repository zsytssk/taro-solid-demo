import { h } from '@tarojs/plugin-framework-react/dist/render';
import { createMemo } from 'solid-js';

export function createComponent(name: string) {
  return (props?) => {
    const memoProps = createMemo(() => {
      const { children, ...otherProps } = props;
      return {
        children,
        otherProps,
      };
    });

    return h(name, memoProps().otherProps, memoProps().children);
  };
}
