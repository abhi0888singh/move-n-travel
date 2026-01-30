import { auth } from "./firebase.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.innerHTML = "✅ Login Successful!";
      msg.style.color = "lime";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    })
    .catch((err) => {
      msg.innerHTML = "❌ " + err.message;
      msg.style.color = "red";
    });
});
