import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { getShops } from './src/lib/firebase';
import { Shop } from './types/shop';

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    (async () => setShops(await getShops()))();
  }, []);

  const shopItem = shops.map((shop, index) => (
    <View key={index.toString()} style={{ marginTop: 20 }}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {shopItem}
      <StatusBar style="auto" />
    </View>
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
