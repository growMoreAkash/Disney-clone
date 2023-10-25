import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCVkJuKOGOs5z4uOcGilucHzIozeRXJZfg",
    authDomain: "disneyplus-clone-5253c.firebaseapp.com",
    projectId: "disneyplus-clone-5253c",
    storageBucket: "disneyplus-clone-5253c.appspot.com",
    messagingSenderId: "695450209694",
    appId: "1:695450209694:web:5e8b36335acb9266feda8f",
    measurementId: "G-SL4JSWN7BJ"
  };
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const storage = getStorage(app);
  
  export { auth, provider, storage};
  export default db;