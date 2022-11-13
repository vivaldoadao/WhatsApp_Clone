
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy0Es6VsfX9_3cKtWprIlo0pk0zuJkYsM",
  authDomain: "whatsapp-ad3f8.firebaseapp.com",
  projectId: "whatsapp-ad3f8",
  storageBucket: "whatsapp-ad3f8.appspot.com",
  messagingSenderId: "393581579999",
  appId: "1:393581579999:web:cfed74d7be3d551711236a"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export {app , db , storage, auth, provider};