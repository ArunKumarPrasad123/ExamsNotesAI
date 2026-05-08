
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "googeauthexamsnotes.firebaseapp.com",
  projectId: "googeauthexamsnotes",
  storageBucket: "googeauthexamsnotes.firebasestorage.app",
  messagingSenderId: "805467127708",
  appId: "1:805467127708:web:ad3db84143d6740aa91259"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}