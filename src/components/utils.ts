import { h } from '@tarojs/plugin-framework-react/dist/render';
import { createEffect } from 'solid-js';

export function createComponent(name: string) {
  return (props?) => {
    const { children, ...otherProps } = props;
    createEffect(() => {
      console.log(`test:>children`, name, children);
    });
    return h(name, otherProps, children);
  };
}
