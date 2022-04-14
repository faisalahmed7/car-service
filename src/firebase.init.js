// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxocRTfUu0DwBzWevpywoiOAd6St6Ejfo",
    authDomain: "car-service-auth.firebaseapp.com",
    projectId: "car-service-auth",
    storageBucket: "car-service-auth.appspot.com",
    messagingSenderId: "596171265336",
    appId: "1:596171265336:web:e31a8f00c1d31c262b9dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;