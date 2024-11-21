// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKLourWyxE-7bUJ-ZMTzdmrSWgEgltyxg",
  authDomain: "projetoapp-35fb3.firebaseapp.com",
  projectId: "projetoapp-35fb3",
  storageBucket: "projetoapp-35fb3.firebasestorage.app",
  messagingSenderId: "203670077727",
  appId: "1:203670077727:web:6e148c26cbfe46c7b0f02a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);