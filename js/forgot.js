import { auth } from "./firebase.js";

import {
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const btn = document.getElementById("forgotBtn");
const emailInput = document.getElementById("email");
const msg = document.getElementById("loginMsg");

btn.addEventListener("click", () => {
  const email = emailInput.value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      msg.innerHTML = "✅ Reset Email Sent!";
      msg.style.color = "yellow";
    })
    .catch((error) => {
      msg.innerHTML = "❌ " + error.message;
      msg.style.color = "red";
    });
});
