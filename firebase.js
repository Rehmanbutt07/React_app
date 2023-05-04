// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
// import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBveDvA6i3D9pIQ4elaqFdSXqI6XToNY-k",
    authDomain: "loot-88b5b.firebaseapp.com",
    projectId: "loot-88b5b",
    storageBucket: "loot-88b5b.appspot.com",
    messagingSenderId: "469162836222",
    appId: "1:469162836222:web:5f245282df226a3c7d65af",
    measurementId: "G-48506V5CQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, initializeApp, collection, addDoc, db, storage, doc, ref, uploadString, getDownloadURL };