import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKv9higxzV-tNKF2SZdlw0MNuN0ZDkxIs",
  authDomain: "digitalyearbook-a1d3c.firebaseapp.com",
  projectId: "digitalyearbook-a1d3c",
  storageBucket: "digitalyearbook-a1d3c.appspot.com",
  messagingSenderId: "789632519308",
  appId: "1:789632519308:web:403401f2415a02b64fffa9",
  measurementId: "G-P2KJBSD7TX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
