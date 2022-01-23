// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSRNSCqcFf0ud2dcGeLsKGkcFRC2wP7qA",
  authDomain: "pokemon-master-trainer.firebaseapp.com",
  projectId: "pokemon-master-trainer",
  storageBucket: "pokemon-master-trainer.appspot.com",
  messagingSenderId: "925086057197",
  appId: "1:925086057197:web:9ebbf7f34de8471d3742e4",
  measurementId: "G-LMYM7CQLSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firestore instance
export const db = getFirestore();