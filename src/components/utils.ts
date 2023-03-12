import { h } from '@tarojs/plugin-framework-react/dist/runtime';

export function createComponent(name: string) {
  return (props?) => {
    // const [local, otherProps] = splitProps(props, ['children']);
    // let children = local.children;

    // const descriptor = Object.getOwnPropertyDescriptor(local, 'children');
    // if (typeof descriptor?.get === 'function') {
    //   children = memo(() => local.children);
    // }

    // return createComponent2(() => {
    //   return createElement(name);
    // }, props);
    return h(name, props);
    // return h(name, otherProps, children);
  };
}
