import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-6b5bb.firebaseapp.com",
  projectId: "clone-6b5bb",
  storageBucket: "clone-6b5bb.appspot.com",
  messagingSenderId: "637279759721",
  appId: "1:637279759721:web:d6ac87a4905a78dac161f8",
  measurementId: "G-C5GP9QG211",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
