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
        img: 'https://wos.develop.meetwhale.com/YXUFBo_dvleF5KwJItNLd',
        jumpType: 'url',
        params: 'https://mp.weixin.qq.com/s/sPjY76MLmHsbBpmyXwQ3Jg',
      },
      {
        customId: 4,
        img: 'https://wos.develop.meetwhale.com/zYshiSk0nIeqTQcevav-X',
        jumpType: 'url',
        params: '',
      },
    ],
    bottomBanner: [
      {
        customId: 2,
        img: 'https://wos.develop.meetwhale.com/dbTPo9EVg3jFTPUEX1Ezd',
        jumpType: 'url',
        params: 'https://mp.weixin.qq.com/s/sPjY76MLmHsbBpmyXwQ3Jg',
      },
    ],
  },
  user_center: { templateType: 0, background: null, rightsShowType: 0 },
};

export function requestData() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`test:>resolve`);
      resolve(home_page_config);
    }, 0);
  });
}
