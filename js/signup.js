import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Form Submit
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Signup Successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
});
