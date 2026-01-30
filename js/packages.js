const packages = [
  {
    name: "Kerala Backwaters",
    price: "₹18,000",
    duration: "4 Nights / 5 Days",
    image: "https://source.unsplash.com/400x250/?kerala"
  },
  {
    name: "Rajasthan Desert Safari",
    price: "₹20,000",
    duration: "4 Nights / 5 Days",
    image: "https://source.unsplash.com/400x250/?rajasthan"
  },
  {
    name: "Goa Beach Holiday",
    price: "₹15,000",
    duration: "3 Nights / 4 Days",
    image: "https://source.unsplash.com/400x250/?goa"
  }
];

const container = document.getElementById("packageList");

packages.forEach((pkg) => {
  container.innerHTML += `
    <div class="card">
      <img src="${pkg.image}">
      <h3>${pkg.name}</h3>
      <p><b>Price:</b> ${pkg.price}</p>
      <p><b>Duration:</b> ${pkg.duration}</p>
      <a href="contact.html" class="btn">Book Now</a>
    </div>
  `;
});
