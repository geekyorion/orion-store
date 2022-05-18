import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfYLqIR0puQifnV6HsQBiuqtvHdgRb3I",
  authDomain: "orion-store-8ef03.firebaseapp.com",
  projectId: "orion-store-8ef03",
  storageBucket: "orion-store-8ef03.appspot.com",
  messagingSenderId: "231478625233",
  appId: "1:231478625233:web:2155dccb25f403992b96f0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
