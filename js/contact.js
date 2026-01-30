import { db } from "./firebase.js";
import { collection, addDoc } from
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const form = document.getElementById("contactForm");
const msg = document.getElementById("contactMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("cName").value;
  const email = document.getElementById("cEmail").value;
  const message = document.getElementById("cMessage").value;

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      time: new Date()
    });

    msg.style.color = "lime";
    msg.innerText = "Message Sent Successfully ✅";

    form.reset();
  } catch (error) {
    msg.style.color = "red
