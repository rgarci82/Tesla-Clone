import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6fBtJv-dcZaTA3nTDDJml5q2gNI9SzyQ",
  authDomain: "tesla-clone-31ff3.firebaseapp.com",
  projectId: "tesla-clone-31ff3",
  storageBucket: "tesla-clone-31ff3.appspot.com",
  messagingSenderId: "969193663818",
  appId: "1:969193663818:web:ed40b6e2019599b743e5b3",
  measurementId: "G-45NKYT1FJ4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
