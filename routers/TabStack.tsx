import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Animation from '../screens/Animation';
import Settings from '../screens/Settings';

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
        name='Animation'
        component={Animation}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name='animation' />,
        }}
      />

      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name='settings' />,
        }}
      />
    </Tab.Navigator>
  );
};
