import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PanGesture from '../screens/PanGesture';
import ReAnimated from '../screens/Reanimated';

const Tab = createBottomTabNavigator<Obj>();

const TabBarIcon = (props: Obj) => <Icon name={props.name} color={props.color} size={24} />;

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: '#f0932b',
  headerStyle: { height: 48 },
  tabBarShowLabel: false,
  headerTitleAlign: 'center',
  tabBarLabelStyle: {
    fontSize: 14,
  },
  // headerRight: (props) => <Text>3313</Text>,
};

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='Reanimated'
        component={ReAnimated}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name='animation' />,
        }}
      />

      <Tab.Screen
        name='PanGesture'
        component={PanGesture}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name='gesture' />,
        }}
      />
    </Tab.Navigator>
  );
};
