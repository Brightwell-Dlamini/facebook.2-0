import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_WzWiCmhagGaUHQZIOMvneDYvEmnoHPw",
  authDomain: "facebook-clone-41534.firebaseapp.com",
  projectId: "facebook-clone-41534",
  storageBucket: "facebook-clone-41534.appspot.com",
  messagingSenderId: "255807706656",
  appId: "1:255807706656:web:85a97a858c072abba9ce45",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
