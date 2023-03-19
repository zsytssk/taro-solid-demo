export type BannerItem = {
  customId: number;
  img: string;
  jumpType: string;
  params: string;
};
export type Renovation = {
  home_page: {
    topBanner: BannerItem[];
    bottomBanner: BannerItem[];
  };
};

const home_page_config = {
  home_page: {
    topBanner: [
      {
        customId: 2,
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9aaaeeda-cb2c-4b57-8eab-7c191cedda8d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681371607&t=d661e0b4fc85e1adacd441e95928e837',
      },
      {
        customId: 4,
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5cd7961d-1683-430e-8d6f-891ce42829cc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681371607&t=686c8aafaa2054dac8267a0d3c376624',
      },
    ],
    bottomBanner: [
      {
        customId: 2,
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9aaaeeda-cb2c-4b57-8eab-7c191cedda8d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681371607&t=d661e0b4fc85e1adacd441e95928e837',
      },
      {
        customId: 2,
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5cd7961d-1683-430e-8d6f-891ce42829cc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681371607&t=686c8aafaa2054dac8267a0d3c376624',
      },
    ],
  },
  user_center: { templateType: 0, background: null, rightsShowType: 0 },
};

export function requestData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(home_page_config);
    }, 0);
  });
}
