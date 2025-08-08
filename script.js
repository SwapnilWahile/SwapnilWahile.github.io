document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const navHeight = document.querySelector("header").offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navHeight - 10,
      behavior: "smooth"
    });
  });
});



const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");

  // Keep loader for 5 seconds
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";

      // Initialize AOS after loader finishes
      AOS.init({
        duration: 800,
        once: false,
      });

    }, 500); // match fade-out time

  }, 1500); // loader visible for 5 sec
});


