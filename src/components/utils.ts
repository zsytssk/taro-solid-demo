import { h } from '@tarojs/plugin-framework-react/dist/render';

export function createComponent(name: string) {
  return () => h(name);
}
