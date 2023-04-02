import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDwvhpuieXCNaCg1SVgVrjT-SKLA0gb3r4",
  authDomain: "auth-101-f7f92.firebaseapp.com",
  projectId: "auth-101-f7f92",
  storageBucket: "auth-101-f7f92.appspot.com",
  messagingSenderId: "76047807143",
  appId: "1:76047807143:web:c7fbe252d0d704d49d6182"
});

const auth = app.auth();
export { auth };
export default app;
