import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import other services as needed

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyC1AbY-rPeu2EIcJjQZIlAgj3hQ7b8YTWo",
    authDomain: "recetas-64cc6.firebaseapp.com",
    databaseURL: "https://recetas-64cc6.firebaseio.com",
    projectId: "recetas-64cc6",
    storageBucket: "recetas-64cc6.appspot.com",
    messagingSenderId: "462659342125",
    appId: "462659342125"
  }
};

// Initialize Firebase if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(environment.firebaseConfig);
} else {
  console.warn('Firebase app already initialized.');
}

// Example of using a Firebase service
const auth = getAuth(); // Always use getAuth() to get the Auth instance
// const db = getFirestore(); // Similarly, get Firestore instance if needed
