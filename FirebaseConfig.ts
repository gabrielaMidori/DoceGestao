import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD7hEZ3DyGhifehT5uhm71ta8TO4ibEfBg",
  authDomain: "doce-gestao-62570.firebaseapp.com",
  projectId: "doce-gestao-62570",
  storageBucket: "doce-gestao-62570.firebasestorage.app",
  messagingSenderId: "79951857679",
  appId: "1:79951857679:web:5afc2327e882c6c3d77b7a",
  measurementId: "G-EN7Z6SGH73"
};

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});