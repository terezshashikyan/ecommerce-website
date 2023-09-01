import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBl8o3povyVFYZH35iS3J9FbyE91dQET-4",
  authDomain: "toyland-6d89a.firebaseapp.com",
  projectId: "toyland-6d89a",
  storageBucket: "toyland-6d89a.appspot.com",
  messagingSenderId: "549468564285",
  appId: "1:549468564285:web:30a287c7f12dc8fb3cf354",
  measurementId: "G-3186S8NQRN"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export  const auth = getAuth(app);
