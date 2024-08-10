// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBwQS48Vo4t4I3qVQG3xsOaXeAEJ7Q_mzA",
  authDomain: "identityaccessmanagement-8e27f.firebaseapp.com",
  projectId: "identityaccessmanagement-8e27f",
  storageBucket: "identityaccessmanagement-8e27f.appspot.com",
  messagingSenderId: "342739624678",
  appId: "1:342739624678:web:cd388c4fde362fcca59127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
