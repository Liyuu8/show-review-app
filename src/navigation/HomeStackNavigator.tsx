import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../../types/navigation';
import CreateReviewModalScreen from '../screens/CreateReviewModalScreen';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';

const RootStack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerTintColor: '#000' }}>
    <RootStack.Group>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Shop" component={ShopScreen} />
    </RootStack.Group>
    <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen
        name="CreateReview"
        component={CreateReviewModalScreen}
      />
    </RootStack.Group>
  </RootStack.Navigator>
);

export default HomeStackNavigator;
