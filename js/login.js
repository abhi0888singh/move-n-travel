import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "lime";
      msg.innerText = "Login Successful ✅ Redirecting...";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1200);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
});
