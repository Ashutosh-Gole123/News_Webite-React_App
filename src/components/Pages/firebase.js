// Firebase initialisation

import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCTN40B4nlZXpQ3dhUHDC6PLSIB9f0B3dM",
  authDomain: "signin-b3a7d.firebaseapp.com",
  projectId: "signin-b3a7d",
  storageBucket: "signin-b3a7d.appspot.com",
  messagingSenderId: "764380880645",
  appId: "1:764380880645:web:2c4b100f865ea04d3e616c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
};
export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password);
};
export function logout(){
  return signOut(auth)
}