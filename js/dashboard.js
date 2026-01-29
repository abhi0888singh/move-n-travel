import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// ✅ Protect Dashboard
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerText = user.email;
  } else {
    alert("❌ Please Login First!");
    window.location.href = "login.html";
  }
});

// ✅ Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("✅ Logged Out Successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
