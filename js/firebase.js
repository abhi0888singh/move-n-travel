import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGsWteoWmrvv2tvJ-s7LEwrrzddvobcJY",
  authDomain: "move-n-travel.firebaseapp.com",
  projectId: "move-n-travel",
  storageBucket: "move-n-travel.appspot.com",
  messagingSenderId: "558385612046",
  appId: "1:558385612046:web:1e54375d890b208fdec35f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
