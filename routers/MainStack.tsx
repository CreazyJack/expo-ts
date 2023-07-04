import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DragBox from '../screens/PanGesture/DragBox';
import Carousel from '../screens/Reanimated/Carousel';
import ScaleBox from '../screens/Reanimated/ScaleBox';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator<Obj>();

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='animation-stack' component={TabStack} options={{ headerShown: false }} />
      <Stack.Screen name='ScaleBox' component={ScaleBox} />
      <Stack.Screen name='DragBox' component={DragBox} />
      <Stack.Screen name='Carousel' component={Carousel} />
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
};
