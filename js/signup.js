// ✅ Import Auth from firebase.js
import { auth } from "./firebase.js";

// ✅ Firebase Signup Function
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Form Submit Event
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get User Inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create New Account
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful ✅");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Signup Error ❌: " + error.message);
    });
});
