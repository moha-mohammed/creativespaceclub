// Image Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-image');

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change slide every 3s

// Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks for contacting us! We’ll be in touch soon.';
  this.reset();
});
