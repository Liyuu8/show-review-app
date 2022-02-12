import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { getShops } from './src/lib/firebase';
import { Shop } from './types/shop';
import ShopReviewItem from './src/components/ShopReviewItem';

export default function App() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
