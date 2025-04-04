import {initializeApp} from "firebase"
import {getAnalytics} from "firebase/analytics"
import {getFirestore} from "firebase/storage"
import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementID: process.env.FIREBASE_MEASUREMENT_ID,
}

const app = !firebase.getApps.length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app)