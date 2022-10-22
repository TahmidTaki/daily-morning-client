// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAltVTegXsU8UdoK-9qk4Z0Svk6U8pVlRE",
    authDomain: "daily-morning.firebaseapp.com",
    projectId: "daily-morning",
    storageBucket: "daily-morning.appspot.com",
    messagingSenderId: "441364297428",
    appId: "1:441364297428:web:0c7b06c6c91abc6cdeed41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;