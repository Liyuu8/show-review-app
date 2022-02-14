import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { RootStackParamList } from '../../types/navigation';

const UserScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'User'>>();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'User'>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>UserScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserScreen;
