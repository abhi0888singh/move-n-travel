import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      msg.innerHTML = "✅ Login Successful! Redirecting...";
      msg.style.color = "lime";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    })
    .catch((error) => {
      msg.innerHTML = "❌ " + error.message;
      msg.style.color = "red";
    });
});
