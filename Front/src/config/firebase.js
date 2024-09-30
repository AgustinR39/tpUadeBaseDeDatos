// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAko75xU9aPygUDZTs5xvDPVfGvxjXft7k",
  authDomain: "tp-uade.firebaseapp.com",
  projectId: "tp-uade",
  storageBucket: "tp-uade.appspot.com",
  messagingSenderId: "848868374689",
  appId: "1:848868374689:web:f981ea7a5eb9eec4a218e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()