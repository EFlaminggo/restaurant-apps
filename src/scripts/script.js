// Sidebar
document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}

// Mendapatkan referensi ke elemen div yang akan menampilkan daftar restoran
const restaurantList = document.getElementById("restaurant-list");

// Mengambil data dari file JSON
fetch("/src/public/data/DATA.json")
  .then((response) => response.json())
  .then((data) => {
    const restaurants = data.restaurants;

    // Loop melalui data restoran dan tambahkan mereka ke daftar restoran
    restaurants.forEach((restaurant) => {
      const restaurantDiv = document.createElement("div");
      restaurantDiv.className = "restaurant";

      // Menambahkan informasi restoran ke elemen div
      restaurantDiv.innerHTML = `
        <h2>${restaurant.name}</h2>
        <img src="${restaurant.pictureId}" alt="${restaurant.name} Image">
        <p>Kota: ${restaurant.city}</p>
        <p>Rating: ${restaurant.rating}</p>
        <p>Deskripsi: ${restaurant.description}</p>
      `;

      // Menambahkan elemen div restoran ke daftar restoran
      restaurantList.appendChild(restaurantDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

