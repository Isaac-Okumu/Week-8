// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Contact form validation
function validateForm(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
