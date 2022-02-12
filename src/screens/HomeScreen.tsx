import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { getShops } from '../lib/firebase';
import { Shop } from '../../types/shop';
import { RootStackParamList } from '../../types/navigation';
import ShopReviewItem from '../components/ShopReviewItem';

const HomeScreen = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  useEffect(() => {
    (async () => setShops(await getShops()))();
  }, []);

  const onShopItemPress = (shop: Shop) => {
    navigation.navigate('Shop', { shop });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem
            shop={item}
            onShopItemPress={() => onShopItemPress(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
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

export default HomeScreen;
