import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from '../screens/Settings';
import AnimStack from './AnimStack';

const Tab = createBottomTabNavigator<Obj>();

const TabBarIcon = (props: Obj) => <Icon name={props.name} color={props.color} size={24} />;

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 14,
  },
};

const Routers = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name='animation-stack'
          component={AnimStack}
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
    </NavigationContainer>
  );
};

export default Routers;
