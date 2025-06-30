import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  "AIzaSyBTT8_qTaooiGdxZcVyWpv-cmJ-VsXpzUQ",
  authDomain: "my-blog-app-ea3fc.firebaseapp.com",
  projectId:"my-blog-app-ea3fc",
  storageBucket:  "my-blog-app-ea3fc.firebasestorage.app",
  messagingSenderId:  "828098940585",
  appId:"1:828098940585:web:81ebef41bd6cf4cd1a23b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
