import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export var firebaseConfig = {
  apiKey: "AIzaSyDLXQ4V6o_ZDK3sBKtWDzG-Wiygi7pMhto",
  authDomain: "dot-ninja.firebaseapp.com",
  projectId: "dot-ninja",
  storageBucket: "dot-ninja.appspot.com",
  messagingSenderId: "803987888413",
  appId: "1:803987888413:web:845cc6a6ac1110761469f4",
  measurementId: "G-CL0EPWYTLM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
