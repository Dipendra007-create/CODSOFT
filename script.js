let currentSlide = 0;

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // show first slide initially
  setInterval(nextSlide, 3000);
});
