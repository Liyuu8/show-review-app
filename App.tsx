import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    (async () => getFirebaseItems())();
  }, []);

  const getFirebaseItems = async () => {
    const firestore = getFirestore();
    const docsSnap = await getDocs(collection(firestore, 'shops'));
    const shops = docsSnap.docs.map((doc) => doc.data() as Shop);
    setShops(shops);
  };

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
