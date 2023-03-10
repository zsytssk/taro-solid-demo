import { Image, Swiper, SwiperItem, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import { Accessor, createSignal, For, Show } from 'solid-js';
import { Renovation } from '../../testData';

import styles from './index.module.less';

type Props = { homeConfig: Accessor<Renovation['home_page'] | undefined> };
export default function SwiperTop({ homeConfig }: Props) {
  const [swiperIndex, setSwiperIndex] = createSignal(0);

  return (
    <View class={styles.swiperTop}>
      <Show when={homeConfig()?.topBanner}>
        <Swiper
          current={swiperIndex()}
          circular
          indicatorDots={false}
          autoplay
          duration={100}
          onChange={e => {
            console.log(`test:>config`, e.detail.current);
            setSwiperIndex(e.detail.current);
          }}
        >
          <For each={homeConfig()?.topBanner}>
            {(item, index) => (
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
            )}
          </For>
        </Swiper>
        <View class="dots">
          <For each={homeConfig()?.topBanner}>
            {(_item, index) => (
              <text
                class={classNames({
                  active: swiperIndex() === index(),
                })}
              />
            )}
          </For>
        </View>
      </Show>
    </View>
  );
}
