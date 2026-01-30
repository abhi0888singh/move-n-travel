import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const msg = document.getElementById("contactMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      time: new Date()
    });

    msg.innerHTML = "✅ Message Sent Successfully!";
    msg.style.color = "lime";

    form.reset();
  } catch (err) {
    msg.innerHTML = "❌ Error! Please try again.";
    msg.style.color = "red";
  }
});
