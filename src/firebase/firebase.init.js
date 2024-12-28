// Do not store config on the client site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaeLGJB_dtTv6qLwXsxVSgyQBAsrR6Vpk",
  authDomain: "simple-firebase-3997e.firebaseapp.com",
  projectId: "simple-firebase-3997e",
  storageBucket: "simple-firebase-3997e.firebasestorage.app",
  messagingSenderId: "865288813483",
  appId: "1:865288813483:web:0a5f100470296e0709f0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;