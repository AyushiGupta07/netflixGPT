// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Wl4DtdtCW2trZ8vkA6EJZXc9hguFuOY",
  authDomain: "netflix-gpt-9e3c5.firebaseapp.com",
  projectId: "netflix-gpt-9e3c5",
  storageBucket: "netflix-gpt-9e3c5.firebasestorage.app",
  messagingSenderId: "659150055696",
  appId: "1:659150055696:web:02c3873a208f3d179b9d95",
  measurementId: "G-67D29Q8JME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
