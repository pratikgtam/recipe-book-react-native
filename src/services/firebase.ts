import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore, collection } from "firebase/firestore";

// Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDQ94flwAlwvxd9QqnHWNvqVBDOQhYY9xM",
    authDomain: "mdev-recipe-book.firebaseapp.com",
    projectId: "mdev-recipe-book",
    storageBucket: "mdev-recipe-book.appspot.com",
    messagingSenderId: "880915372671",
    appId: "1:880915372671:web:f4d03b058bc018fece3d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);


// Exporting the Firebase app, auth, and db
export { app, auth, db };