import { useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from 'react-native';

import { RootStackParamList } from '../../types/navigation';
import ShopDetail from '../components/ShopDetail';

const ShopScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Shop'>>();
  const { shop } = route.params;

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Shop'>>();
  useEffect(() => {
    navigation.setOptions({ title: shop.name });
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <ShopDetail shop={shop} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default ShopScreen;
