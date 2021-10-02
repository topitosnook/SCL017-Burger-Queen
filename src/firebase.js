import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9m8z3KXJ6P78pvGzyqDj9L7_NclYiBIw',
  authDomain: 'spooky-burger.firebaseapp.com',
  projectId: 'spooky-burger',
  storageBucket: 'spooky-burger.appspot.com',
  messagingSenderId: '699647013398',
  appId: '1:699647013398:web:323347bba7a50b44eefb37',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
