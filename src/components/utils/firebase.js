// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbiYennVup4SRmrbpgX8Pd0txSQND_dk",
  authDomain: "contactapp-fda5b.firebaseapp.com",
  databaseURL: "https://contactapp-fda5b-default-rtdb.firebaseio.com",
  projectId: "contactapp-fda5b",
  storageBucket: "contactapp-fda5b.appspot.com",
  messagingSenderId: "179034211114",
  appId: "1:179034211114:web:0a88fbe505f06f6dd9d453",
};

// Initialize Firebase
export const firabase = initializeApp(firebaseConfig);
