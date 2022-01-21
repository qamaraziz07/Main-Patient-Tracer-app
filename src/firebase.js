import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA66-eqZ_ei_HfbVZfvHOje-MllypvkvS4",
  authDomain: "patienttracerapp-49b0c.firebaseapp.com",
  projectId: "patienttracerapp-49b0c",
  storageBucket: "patienttracerapp-49b0c.appspot.com",
  messagingSenderId: "610356457758",
  appId: "1:610356457758:web:47725b06c6d0fffb5dd90f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// Initialize Authentication
export const auth = getAuth(app);
