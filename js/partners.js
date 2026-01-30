import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const form = document.getElementById("partnerForm");
const msg = document.getElementById("partnerMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  msg.innerHTML = "⏳ Submitting...";

  const businessName = document.getElementById("businessName").value;
  const ownerName = document.getElementById("ownerName").value;
  const email = document.getElementById("partnerEmail").value;
  const phone = document.getElementById("phone").value;
  const serviceType = document.getElementById("serviceType").value;

  try {
    await addDoc(collection(db, "partnerRequests"), {
      businessName,
      ownerName,
      email,
      phone,
      serviceType,
      createdAt: serverTimestamp()
    });

    msg.innerHTML = "✅ Partner Request Submitted!";
    msg.style.color = "lime";

    form.reset();

  } catch (error) {
    msg.innerHTML = "❌ Error! Try Again.";
    msg.style.color = "red";
    console.log(error);
  }
});
