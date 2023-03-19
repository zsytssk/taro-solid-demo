import { Image, Swiper, SwiperItem, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import {
  Accessor,
  createEffect,
  createSignal,
  For,
  onCleanup,
  Show,
} from 'solid-js';
import { Renovation } from '../../testData';

import styles from './index.module.less';

type Props = { homeConfig: Accessor<Renovation['home_page'] | undefined> };
export default function SwiperTop({ homeConfig }: Props) {
  const [swiperIndex, setSwiperIndex] = createSignal(0);

  console.warn(`test:>SwiperTop`);
  onCleanup(() => {
    console.warn(`test:>SwiperTop:>onCleanup`);
  });

  createEffect(() => {
    console.warn(`test:>SwiperTop`);
  });

  return (
    <View class={styles.swiperTop}>
      <Show when={homeConfig()?.topBanner}>
        <Swiper
          circular
          indicatorDots={false}
          autoplay
          duration={100}
          onChange={e => {
            setSwiperIndex(e.detail.current);
          }}
        >
          <For each={homeConfig()?.topBanner}>
            {item => (
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
              <Text
                classList={{
                  active: swiperIndex() === index(),
                }}
              />
            )}
          </For>
        </View>
      </Show>
    </View>
  );
}
