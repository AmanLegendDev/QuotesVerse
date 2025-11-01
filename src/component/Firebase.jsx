// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA9d5bJXD2O7TAhzh6gma6k3RGe4Fy9iPg",
  authDomain: "react-firebase-demo-bb00e.firebaseapp.com",
  projectId: "react-firebase-demo-bb00e",
  storageBucket: "react-firebase-demo-bb00e.firebasestorage.app",  // ✅ new domain
  messagingSenderId: "1089205467291",
  appId: "1:1089205467291:web:72e57393db46e6f78d2e3e",
  measurementId: "G-V9S6D6XM3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);

// ✅ Export Storage with bucket fixed
export const storage = getStorage(app, "gs://react-firebase-demo-bb00e.firebasestorage.app");
