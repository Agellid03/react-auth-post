import firebase from "firebase/compat/app";
//!Importer ceci pour la faire connaitre au composant
import "firebase/compat/auth";

// Initialize Firebase
// Your web app's Firebase configuration
const app = firebase.initializeApp({
  // On recupere notre variable d'environnement
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-62bdf.firebaseapp.com",
  projectId: "react-firebase-redux-62bdf",
  storageBucket: "react-firebase-redux-62bdf.appspot.com",
  messagingSenderId: "429893414392",
  appId: "1:429893414392:web:27bc90bd225974cbe53a0d",
});

//Const exportées pour creer utilisateurs
export const auth = app.auth();
export default app;

// Import the functions you need from the SDKs you need
