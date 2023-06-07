// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-4XjKuiqVNc5u4ATWALOPfLrCqM6LgDg",
  authDomain: "practice-project-8e62b.firebaseapp.com",
  projectId: "practice-project-8e62b",
  storageBucket: "practice-project-8e62b.appspot.com",
  messagingSenderId: "1081749292483",
  appId: "1:1081749292483:web:b0ae93722591c7a4d8e976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore conncetion --
export const db = getFirestore(app);