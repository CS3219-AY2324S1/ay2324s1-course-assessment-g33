// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  getMultiFactorResolver,
  GoogleAuthProvider,
} from "firebase/auth";

//const dotenv = require("dotenv");

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCYIbo2irWNOA0oHyKc5ENBRllI0OwFsD0",

  authDomain: "g33-peerprep.firebaseapp.com",

  projectId: "g33-peerprep",

  storageBucket: "g33-peerprep.appspot.com",

  messagingSenderId: "863068625730",

  appId: "1:863068625730:web:44150336f00aac45e846db",

  measurementId: "G-ZR26SP6XL8",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

  // appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
