import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Routers from './routers';

export default () => {
  return (
    <GestureHandlerRootView style={containerStyle}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Routers />
    </GestureHandlerRootView>
  );
};

const containerStyle = {
  flex: 1,
};
