import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  msg.innerHTML = "⏳ Sending...";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      message,
      createdAt: serverTimestamp()
    });

    msg.innerHTML = "✅ Message Sent Successfully!";
    msg.style.color = "lime";

    form.reset();

  } catch (error) {
    msg.innerHTML = "❌ Error! Try again.";
    msg.style.color = "red";
    console.log(error);
  }
});
