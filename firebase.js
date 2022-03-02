import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyB_WzWiCmhagGaUHQZIOMvneDYvEmnoHPw",
  authDomain: "facebook-clone-41534.firebaseapp.com",
  projectId: "facebook-clone-41534",
  storageBucket: "facebook-clone-41534.appspot.com",
  messagingSenderId: "255807706656",
  appId: "1:255807706656:web:85a97a858c072abba9ce45",
};
const app = !getApp.length ? initializeApp(firebaseConfig) : app();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
