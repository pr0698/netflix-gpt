// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMoKXKFPIDgvrO-qodsUFWuekb_niWZ8o",
  authDomain: "netflix-gpt-d55b1.firebaseapp.com",
  projectId: "netflix-gpt-d55b1",
  storageBucket: "netflix-gpt-d55b1.appspot.com",
  messagingSenderId: "88240113687",
  appId: "1:88240113687:web:da60a9927c5396587cf452",
  measurementId: "G-X0CXMR8QN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();