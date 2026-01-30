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

  // Loading Message
  msg.innerHTML = "⏳ Submitting Request...";
  msg.style.color = "yellow";

  // Input Values
  const businessName = document.getElementById("businessName").value;
  const ownerName = document.getElementById("ownerName").value;
  const email = document.getElementById("partnerEmail").value;
  const phone = document.getElementById("phone").value;
  const serviceType = document.getElementById("serviceType").value;

  try {
    // Save Partner Request in Firestore
    await addDoc(collection(db, "partnerRequests"), {
      businessName: businessName,
      ownerName: ownerName,
      email: email,
      phone: phone,
      serviceType: serviceType,
      createdAt: serverTimestamp()
    });

    msg.innerHTML = "✅ Partner Request Submitted Successfully!";
    msg.style.color = "lime";

    form.reset();

  } catch (error) {
    msg.innerHTML = "❌ Error! Please try again.";
    msg.style.color = "red";
    console.log("Partner Error:", error);
  }
});
