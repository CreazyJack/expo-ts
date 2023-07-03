import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Carousel from '../screens/Animation/Carousel';
import PanGesture from '../screens/Animation/PanGesture';
import Reanimated from '../screens/Animation/ReAnimated/ScaleBox';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator<Obj>();

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='animation-stack' component={TabStack} options={{ headerShown: false }} />
      <Stack.Screen name='Reanimated' component={Reanimated} />
      <Stack.Screen name='PanGesture' component={PanGesture} />
      <Stack.Screen name='Carousel' component={Carousel} />
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
};
