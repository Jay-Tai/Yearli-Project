import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKv9higxzV‑tNKF2SZdlw0MNuN0ZDkxIs",
  authDomain: "digitalyearbook‑a1d3c.firebaseapp.com",
  projectId: "digitalyearbook‑a1d3c",
  storageBucket: "digitalyearbook‑a1d3c.firebasestorage.app",
  messagingSenderId: "789632519308",
  appId: "1:789632519308:web:403401f2415a02b64fffa9",
  measurementId: "G‑P2KJBSD7TX", // optional
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
