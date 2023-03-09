import { h } from '@tarojs/plugin-framework-react/dist/render';

export function createComponent(name: string) {
  return (props?) => {
    const { children, ...otherProps } = props;
    return h(name, otherProps, children);
  };
}
