document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// const menuToggle = document.getElementById("mobile-menu");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
