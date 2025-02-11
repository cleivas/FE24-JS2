// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNOOjh9GFht9NWwLsTn5fuVY4-PI3LlNM",
  authDomain: "restrictions-6ead1.firebaseapp.com",
  databaseURL: "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restrictions-6ead1",
  storageBucket: "restrictions-6ead1.firebasestorage.app",
  messagingSenderId: "171031087493",
  appId: "1:171031087493:web:76eed4b188191f6d11dcec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);