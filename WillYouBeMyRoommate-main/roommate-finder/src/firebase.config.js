import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIi-Rx3OYvpnLUG-5g-oYLtgqe5vdXH5Y",
  authDomain: "roommate-finder-35050.firebaseapp.com",
  projectId: "roommate-finder-35050",
  storageBucket: "roommate-finder-35050.appspot.com",
  messagingSenderId: "845990741976",
  appId: "1:845990741976:web:51591cda799db72b06d4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();