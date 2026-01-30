// ✅ Package Data (Future Ready for Firebase)
const packages = [
  {
    name: "Goa Beach Holiday",
    price: "₹12,999",
    days: "3 Nights / 4 Days",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Manali Adventure Trip",
    price: "₹15,499",
    days: "4 Nights / 5 Days",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Dubai Luxury Tour",
    price: "₹49,999",
    days: "5 Nights / 6 Days",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Kashmir Paradise Package",
    price: "₹22,999",
    days: "6 Nights / 7 Days",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  }
];

// ✅ Show Packages on Page
const packageList = document.getElementById("packageList");

packages.forEach((pkg) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${pkg.image}" alt="${pkg.name}">
    <h3>${pkg.name}</h3>
    <p>${pkg.days}</p>
    <p><b>${pkg.price}</b></p>
    <button onclick="bookNow('${pkg.name}')">Book Now</button>
  `;

  packageList.appendChild(card);
});

// ✅ Booking Function
function bookNow(packageName) {
  alert("Booking Started for: " + packageName);

  // Future Upgrade:
  // Redirect to booking page or Firebase booking system
}
