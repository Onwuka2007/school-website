const overlay = document.querySelector(".overlay");
const navLinks = document.getElementById("nav-links");
const toggleMenu = document.getElementById("menu-toggle");
const slides = document.querySelectorAll(".hero-bg");
const answers = document.querySelectorAll(".answer");
const readMore = document.querySelector(".read-more-btn");
const readLess = document.querySelector(".read-less-btn");
const modal = document.getElementById("registerModal");
const registerLink = document.querySelectorAll(".register");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.getElementById("mobile-menu");
const reveals = document.querySelectorAll(".reveal");
const float = document.getElementById("floatList");
const plus = document.getElementById("plus-sign");

// Toggle mobile menu
toggleMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("hidden");
});

// Close mobile menu when overlay is clicked
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  mobileMenu.classList.remove("show");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.add("hidden");
    mobileMenu.classList.remove("show");
  });
});

//Image Slider logic
let current = 0;

function changeSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(changeSlide, 4000);

// Function to expand the read more text
function expand() {
  preventDefault();
  answers.forEach((answer) => {
    answer.style.display = "block";
  });
  readMore.style.display = "none";
  readLess.style.display = "block";
}

// Function to close the read more text
function collapse() {
  preventDefault();
  answers.forEach((answer) => {
    answer.style.display = "none";
  });
  readLess.style.display = "none";
  readMore.style.display = "block";
}

readMore.addEventListener("click", expand);
readLess.addEventListener("click", collapse);

// Open book appointment modal
registerLink.forEach((regLink) => {
  regLink.addEventListener("click", (e) => {
    e.preventDefault(); //this prevents the link from going to # first
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//Reveal-on-scroll
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  reveals.forEach((el) => observer.observe(el));
}
revealOnScroll();

//Footer
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

//Floating Btn
plus.addEventListener("click", (e) => {
  e.preventDefault();
  float.classList.toggle("show");
});

//Removes the floating btn when any link is clicked
document.querySelectorAll("#floatList a").forEach((link) => {
  link.addEventListener("click", () => {
    float.classList.remove("show");
  });
});

// Close floating menu if clicked outside
document.addEventListener("click", (e) => {
  if (
    float.classList.contains("show") && // only check if it's open
    !float.contains(e.target) && // click not inside float menu
    !plus.contains(e.target) // click not on the plus button
  ) {
    float.classList.remove("show");
  }
});

// Google Analytics Event Tracking for form submission
function trackFormSubmit() {
  gtag("event", "submit", {
    event_category: "Registration Form",
    event_label: "Parent Submission",
  });
}
