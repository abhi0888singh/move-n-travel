import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGsWteoWmrvy2tvJ-s7LEwrrzddvobcJY",
  authDomain: "move-n-travel.firebaseapp.com",
  projectId: "move-n-travel",
  storageBucket: "move-n-travel.firebasestorage.app",
  messagingSenderId: "558385612046",
  appId: "1:558385612046:web:1e54375d890b208fdec35f",
  measurementId: "G-CZFGVW2FTL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
