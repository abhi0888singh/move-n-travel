// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCGsWteoWmrvy2tvJ-s7LEwrrzzddvobcJY",
  authDomain: "move-n-travel.firebaseapp.com",
  projectId: "move-n-travel",
  storageBucket: "move-n-travel.appspot.com",
  messagingSenderId: "558385612046",
  appId: "1:558385612046:web:1e54375d890b208fdec35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth + Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
