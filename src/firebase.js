import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASZtN3fDLZUvZz7t4nlyiVlc_jNG_q1v0",
  authDomain: "patient-tracer-app.firebaseapp.com",
  projectId: "patient-tracer-app",
  storageBucket: "patient-tracer-app.appspot.com",
  messagingSenderId: "251701273473",
  appId: "1:251701273473:web:971eb0c91c5c613669be80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase Firestore
export const db = getFirestore(app);
//Firebase Authentication
export const auth = getAuth(app);
// Firebase Storage
export const storage = getStorage(app);
