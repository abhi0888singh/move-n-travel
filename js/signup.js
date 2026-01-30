import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const form = document.getElementById("signupForm");
const msg = document.getElementById("signupMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerHTML = "✅ Signup Successful!";
      msg.style.color = "lime";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((err) => {
      msg.innerHTML = "❌ " + err.message;
      msg.style.color = "red";
    });
});
