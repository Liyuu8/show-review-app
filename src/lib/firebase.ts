import { getApps, initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore';

import shops from '../../assets/data/shops.json';

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
import { Shop } from '../../types/shop';

if (!getApps().length) {
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
}

export const getInitShops = async () => {
  const firestore = getFirestore();
  await Promise.all(
    shops.map(async (shop) => {
      setDoc(doc(firestore, 'shops', shop.id.toString()), {
        name: shop.name,
        place: shop.place,
        imageUrl: shop.imageUrl,
        score: shop.score,
      });
    })
  );

  return true;
};

export const getShops = async () => {
  const firestore = getFirestore();
  const docsSnap = await getDocs(
    query(collection(firestore, 'shops'), orderBy('score', 'desc'))
  );
  const shops = docsSnap.docs.map((doc) => doc.data() as Shop);

  return shops;
};
