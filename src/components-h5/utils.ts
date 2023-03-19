import { h } from '@tarojs/plugin-framework-react/dist/runtime';

export function createComponent(name: string) {
  return (props?) => {
    return h(name, props);
  };
}
