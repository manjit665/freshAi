// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fresherai-5caed.firebaseapp.com",
  projectId: "fresherai-5caed",
  storageBucket: "fresherai-5caed.firebasestorage.app",
  messagingSenderId: "995081665947",
  appId: "1:995081665947:web:09f4274ad686d1e4bcf53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}
