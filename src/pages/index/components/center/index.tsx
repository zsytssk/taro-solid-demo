import { Button, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';

export function Center() {
  return (
    <>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/menu/index',
          });
        }}
      >
        goto menu
      </Button>

      <Input
        onInput={e => {
          console.log(`test:>`, (e.target as any).value);
        }}
      />
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/test/index',
          });
        }}
      >
        goto test
      </Button>
    </>
  );
}
