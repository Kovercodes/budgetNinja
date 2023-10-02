// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYt-Yh6-KbGo4pprxTaLU3iPifRaHkmSs",
  authDomain: "budgetninja-d2516.firebaseapp.com",
  projectId: "budgetninja-d2516",
  storageBucket: "budgetninja-d2516.appspot.com",
  messagingSenderId: "200556529212",
  appId: "1:200556529212:web:3719abf387114d193c6539",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
