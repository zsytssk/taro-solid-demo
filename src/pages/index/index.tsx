import { Button, Text, View } from '@tarojs/components';
import React, { useState } from 'react';
import './index.less';

// export default function Index() {
//   const [state, setState] = useState(0);
//   return (
//     <View className="index">
//       <Text>Hello world {state}!</Text>
//       <Button onClick={() => setState(state + 1)}>click</Button>
//     </View>
//   );
// }
export default class Index extends React.Component {
  componentDidShow() {
    console.log(`test:>componentDidShow`);
  }
  render(): React.ReactNode {
    return (
      <View className="index">
        <Text>Hello world !</Text>
        <Button>click</Button>
      </View>
    );
  }
}
