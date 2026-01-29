import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Form Submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ Login Failed: " + error.message);
    });
});
