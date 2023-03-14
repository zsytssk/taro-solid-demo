import Taro from '@tarojs/taro';

export function gotoWebPage(url?: string) {
  if (!url) {
    return;
  }
  /** 支付宝小程序不做处理 */
  Taro.navigateTo({
    url: `/pages/webPage/index?url=${url}`,
  });
}
