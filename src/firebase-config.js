// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinnBzQ9zZtKgMFU6yRt6n2e9Gq1l5ezM",
  authDomain: "chatapp-9bc57.firebaseapp.com",
  projectId: "chatapp-9bc57",
  storageBucket: "chatapp-9bc57.appspot.com",
  messagingSenderId: "351483824842",
  appId: "1:351483824842:web:8e8b2a1bbe79f3559ec233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const   auth = getAuth(app)
 export  const provider = new GoogleAuthProvider();
 export const db = getFirestore(app)