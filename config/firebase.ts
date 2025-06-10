// Firebase configuration for Connect1to1 platform
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBSGNsiHRXS3bLnvVmMOAmvd1KMD9jh_6A",
  authDomain: "connect-1to1.firebaseapp.com",
  projectId: "connect-1to1",
  storageBucket: "connect-1to1.firebasestorage.app",
  messagingSenderId: "461276414849",
  appId: "1:461276414849:web:f6f65eeaf0774c56a35e80",
  measurementId: "G-EVM5Z7DS5M"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Use emulators for local development if needed
if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // Only connect to emulators in browser environment
    try {
      connectAuthEmulator(auth, 'http://localhost:9099');
      connectFirestoreEmulator(db, 'localhost', 8080);
      connectStorageEmulator(storage, 'localhost', 9199);
      console.log('Connected to Firebase emulators');
    } catch (error) {
      console.error('Failed to connect to Firebase emulators:', error);
    }
  }
}

export { app, auth, db, storage };
