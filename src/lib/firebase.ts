import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

export const getShops = async () => {
  const firestore = getFirestore();
  const docsSnap = await getDocs(collection(firestore, 'shops'));
  const shops = docsSnap.docs.map((doc) => doc.data() as Shop);

  return shops;
};
