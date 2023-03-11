import { h, memo } from '@tarojs/plugin-framework-react/dist/runtime';

export function createComponent(name: string) {
  return (props?) => {
    const { children: rawChildren, ...otherProps } = props;
    let children = rawChildren;

    const descriptor = Object.getOwnPropertyDescriptor(props, 'children');
    if (typeof descriptor?.get === 'function') {
      children = memo(() => props.children);
    }

    return h(name, otherProps, children);
  };
}
