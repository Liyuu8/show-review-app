import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#900',
          tabBarInactiveTintColor: '#999',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#900',
          tabBarInactiveTintColor: '#999',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
