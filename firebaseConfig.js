// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkBSIL_H51f-3vzsUJmSfqnknNHPFkX8c',
  authDomain: 'primal-ivy-319500.firebaseapp.com',
  projectId: 'primal-ivy-319500',
  storageBucket: 'primal-ivy-319500.appspot.com',
  messagingSenderId: '628446212322',
  appId: '1:628446212322:web:ee1a2d05c0aba84033eebb',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);