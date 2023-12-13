import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDlS5aGt_URyXz473CNzy_fPTdq-G3LO54",
  authDomain: "signal-16909.firebaseapp.com",
  projectId: "signal-16909",
  storageBucket: "signal-16909.appspot.com",
  messagingSenderId: "342890421745",
  appId: "1:342890421745:web:8466e2a5514f407a0c3850"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };