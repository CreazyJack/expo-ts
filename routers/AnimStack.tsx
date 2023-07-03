import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animation from '../screens/Animation';
import Carousel from '../screens/Animation/Carousel';
import PanGesture from '../screens/Animation/PanGesture';
import Reanimated from '../screens/Animation/ReAnimated/ScaleBox';

const Stack = createNativeStackNavigator<Obj>();

export default function AnimStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Animation' component={Animation} />
      <Stack.Screen name='Reanimated' component={Reanimated} />
      <Stack.Screen name='PanGesture' component={PanGesture} />
      <Stack.Screen name='Carousel' component={Carousel} />
    </Stack.Navigator>
  );
}
