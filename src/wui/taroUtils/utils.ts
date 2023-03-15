import Taro from '@tarojs/taro';

export function getCurPageId() {
  const pages = Taro.getCurrentPages();
  const curPageInfo = pages[pages.length - 1];
  if (!curPageInfo) {
    return;
  }
  return curPageInfo.$taroPath;
}
export function getCurPagePath() {
  const pages = Taro.getCurrentPages();
  const curPageInfo = pages[pages.length - 1];
  return curPageInfo?.route;
}
