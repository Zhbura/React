// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtBgkEVLP4fhJFb1Ob7QcHaQj1QF78_EY",
    authDomain: "projectchats-9e9e9.firebaseapp.com",
    projectId: "projectchats-9e9e9",
    storageBucket: "projectchats-9e9e9.appspot.com",
    messagingSenderId: "755714981355",
    appId: "1:755714981355:web:4698f15d3996b19e8dedae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);

export const login = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);

export const logOut = () => signOut(auth);