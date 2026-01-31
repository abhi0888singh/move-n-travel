// BOOKING BUTTON POPUP
document.addEventListener("click", function (e) {
  if (e.target.innerText === "Book Now") {
    alert("✅ Booking Successful!\nOur team will contact you soon.");
  }
});


// CONTACT FORM MESSAGE SYSTEM
function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("contactMsg").innerHTML =
      "❌ Please fill all fields!";
    return;
  }

  document.getElementById("contactMsg").innerHTML =
    "✅ Message Sent Successfully! We will reply soon.";

  // Clear Form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
