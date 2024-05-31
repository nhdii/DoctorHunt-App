// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_d0BHidjBk27-lJK0y7ptL3s4eX8My8",
  authDomain: "doctorhunt-27336.firebaseapp.com",
  projectId: "doctorhunt-27336",
  storageBucket: "doctorhunt-27336.appspot.com",
  messagingSenderId: "737452995112",
  appId: "1:737452995112:web:cdb22ff3b5b72fa2933b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {auth, firestore}