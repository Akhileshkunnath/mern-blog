// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a02bf.firebaseapp.com",
  projectId: "mern-blog-a02bf",
  storageBucket: "mern-blog-a02bf.appspot.com",
  messagingSenderId: "877775989358",
  appId: "1:877775989358:web:d7a3343e4baf84c50d147f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);