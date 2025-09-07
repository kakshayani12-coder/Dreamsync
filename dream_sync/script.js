/* 🌈 Dream Sync JS */

// Hero Image Carousel
let currentSlide = 0;
function showSlides() {
  const slides = document.querySelectorAll(".hero-carousel img");
  slides.forEach((slide, index) => {
    slide.style.display = (index === currentSlide) ? "block" : "none";
  });
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showSlides, 4000); // change every 4s
window.onload = showSlides;

// Theme Switcher
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      document.body.style.background = "linear-gradient(135deg, #2c2c2c, #444, #222)";
      document.body.style.color = "#eee";
      toggleBtn.innerText = "☀ Light Mode";
    } else {
      document.body.style.background = "";
      document.body.style.color = "#333";
      toggleBtn.innerText = "🌙 Dark Mode";
    }
  });
}