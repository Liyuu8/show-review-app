import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { getShops } from '../lib/firebase';
import { Shop } from '../../types/shop';
import ShopReviewItem from '../components/ShopReviewItem';

const HomeScreen = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    (async () => setShops(await getShops()))();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
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