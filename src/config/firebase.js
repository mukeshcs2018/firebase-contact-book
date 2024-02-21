// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA32TvBlkXGBDqD7FNaTVqitq5kck3uuwg",
  authDomain: "fir-contact-99bf8.firebaseapp.com",
  projectId: "fir-contact-99bf8",
  storageBucket: "fir-contact-99bf8.appspot.com",
  messagingSenderId: "798787286610",
  appId: "1:798787286610:web:e52bc54d454557aeb8118b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
