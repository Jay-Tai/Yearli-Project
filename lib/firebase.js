// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKv9higxzV-tNKF2SZdlw0MNuN0ZDkxIs",
  authDomain: "digitalyearbook-a1d3c.firebaseapp.com",
  projectId: "digitalyearbook-a1d3c",
  storageBucket: "digitalyearbook-a1d3c.firebasestorage.app",
  messagingSenderId: "789632519308",
  appId: "1:789632519308:web:403401f2415a02b64fffa9",
  measurementId: "G-P2KJBSD7TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
