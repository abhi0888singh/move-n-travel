import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const form = document.getElementById("signupForm");
const msg = document.getElementById("signupMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "lime";
      msg.innerText = "Account Created ✅ Redirecting...";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.innerText = error.message;
    });
});
