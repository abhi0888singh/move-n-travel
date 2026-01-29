// ✅ Import Firebase Auth
import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Elements
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// ✅ Protect Dashboard Page
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerText = "Logged in as: " + user.email;
  } else {
    alert("Please login first!");
    window.location.href = "login.html";
  }
});

// ✅ Logout Function
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout Error: " + error.message);
    });
});
