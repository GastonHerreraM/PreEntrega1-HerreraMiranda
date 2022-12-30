import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUR1nvvaO4Xp1sjxJMCWqHlY6LS6yW3IA",
  authDomain: "mhshop-43540.firebaseapp.com",
  projectId: "mhshop-43540",
  storageBucket: "mhshop-43540.appspot.com",
  messagingSenderId: "574543458761",
  appId: "1:574543458761:web:ea9d870f3af004837c7818"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;