// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0bT6Rv7ewMQJPKppqCq-Z7eIQhb7kbw4",
  authDomain: "gamer-store-bbb55.firebaseapp.com",
  projectId: "gamer-store-bbb55",
  storageBucket: "gamer-store-bbb55.appspot.com",
  messagingSenderId: "739265843220",
  appId: "1:739265843220:web:d83660be2da542429e9701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;