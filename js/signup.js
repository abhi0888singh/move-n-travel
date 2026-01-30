import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const form = document.getElementById("signupForm");
const msg = document.getElementById("signupMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      msg.innerHTML = "✅ Signup Successful! Redirecting...";
      msg.style.color = "lime";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((error) => {
      msg.innerHTML = "❌ " + error.message;
      msg.style.color = "red";
    });
});
