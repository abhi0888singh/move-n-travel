import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Signup
window.signupUser = function () {
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").innerHTML =
        "✅ Signup Successful!";
    })
    .catch((error) => {
      document.getElementById("msg").innerHTML =
        "❌ " + error.message;
    });
};

// Login
window.loginUser = function () {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").innerHTML =
        "✅ Login Successful!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    })
    .catch((error) => {
      document.getElementById("msg").innerHTML =
        "❌ " + error.message;
    });
};

// Reset Password
window.resetPassword = function () {
  let email = document.getElementById("resetEmail").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      document.getElementById("msg").innerHTML =
        "✅ Reset Link Sent!";
    })
    .catch((error) => {
      document.getElementById("msg").innerHTML =
        "❌ " + error.message;
    });
};
