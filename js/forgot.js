import { auth } from "./firebase.js";

import {
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const form = document.getElementById("forgotForm");
const msg = document.getElementById("forgotMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("forgotEmail").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      msg.innerHTML = "✅ Reset Link Sent to Email!";
      msg.style.color = "lime";
    })
    .catch((error) => {
      msg.innerHTML = "❌ " + error.message;
      msg.style.color = "red";
    });
});
