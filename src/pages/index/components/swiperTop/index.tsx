import { Image, Swiper, SwiperItem, View } from '@tarojs/components';
import { Accessor, createEffect, createSignal } from 'solid-js';
import { Renovation } from '../../testData';

import styles from './index.module.less';

type Props = { homeConfig: Accessor<Renovation['home_page'] | undefined> };
export default function SwiperTop({ homeConfig }: Props) {
  const [count, setCount] = createSignal(0);
  const [swiperIndex, setSwiperIndex] = createSignal(0);

  setInterval(() => {
    setCount(count() + 1);
  }, 1000);

  createEffect(() => {
    console.log(`test:>homeConfig`, JSON.stringify(homeConfig(), null, 2));
  });

  return (
    <View class={styles.swiperTop}>
      {count()}
      {/* {JSON.stringify(homeConfig(), null, 2)} */}
      {/* {homeConfig()?.topBanner ? (
        <Swiper
          circular
          indicatorDots={false}
          autoplay
          duration={100}
          onChange={e => {
            setSwiperIndex(e.detail.current);
          }}
        >
          {homeConfig()?.topBanner.map((item, index) => {
            return (
              <SwiperItem
                key={item.customId}
                onClick={() => {
                  if (item.jumpType === 'url') {
                    //   gotoWebPage(item.params);
                  }
                }}
              >
                <Image src={item.img} mode="aspectFill" />
              </SwiperItem>
            );
          })}
        </Swiper>
      ) : null} */}
    </View>
  );
}
