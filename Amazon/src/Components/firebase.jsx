// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAtQuKCIugN5kaBIWKFyiwhoXUqwojD1kg",
	authDomain: "fir-1a184.firebaseapp.com",
	projectId: "fir-1a184",
	storageBucket: "fir-1a184.appspot.com",
	messagingSenderId: "771711608156",
	appId: "1:771711608156:web:3cb9ec24e5437ff62bcd99",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
