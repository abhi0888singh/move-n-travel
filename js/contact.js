import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const form = document.getElementById("contactForm");
const msg = document.getElementById("contactMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("cName").value;
  let email = document.getElementById("cEmail").value;
  let message = document.getElementById("cMessage").value;

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      time: new Date()
    });

    msg.innerHTML = "✅ Message Sent Successfully!";
    msg.style.color = "lime";

    form.reset();
  } catch (err) {
    msg.innerHTML = "❌ Error Sending Message!";
    msg.style.color = "red";
  }
});
