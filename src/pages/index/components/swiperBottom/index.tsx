import { Image, Swiper, SwiperItem, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import { Accessor, createMemo, createSignal, For, Show } from 'solid-js';
import { Renovation } from '../../testData';

import styles from './index.module.scss';

type Props = { homeConfig: Accessor<Renovation['home_page'] | undefined> };
export function SwiperBottom({ homeConfig }: Props) {
  const [swiperIndex, setSwiperIndex] = createSignal(0);

  const banner = createMemo(() => {
    return homeConfig()?.bottomBanner;
  });

  return (
    <View class={styles.swiperBottom}>
      <Show when={banner()}>
        <Swiper
          circular
          indicatorDots={false}
          duration={100}
          onChange={e => {
            setSwiperIndex(e.detail.current);
          }}
        >
          <For each={banner()}>
            {item => (
              <SwiperItem
                key={item.customId}
                onClick={() => {
                  if (item.jumpType === 'url') {
                    // gotoWebPage(item.params);
                  }
                }}
              >
                <Image src={item.img} mode="widthFix" />
              </SwiperItem>
            )}
          </For>
        </Swiper>
      </Show>
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
    </View>
  );
}
