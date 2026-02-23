const overlay = document.querySelector(".overlay");
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
if (toggleMenu && mobileMenu && overlay) {
  toggleMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    overlay.classList.toggle("hidden");
  });
}

// Close mobile menu when overlay is clicked
if (overlay && mobileMenu) {
  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    mobileMenu.classList.remove("show");
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (overlay) overlay.classList.add("hidden");
    if (mobileMenu) mobileMenu.classList.remove("show");
  });
});

//Image Slider logic
let current = 0;

function changeSlide() {
  if (!slides.length) return;
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

if (slides.length > 1) {
  setInterval(changeSlide, 4000);
}

// Function to expand the read more text
function expand(e) {
  if (e) e.preventDefault();
  answers.forEach((answer) => {
    answer.style.display = "block";
  });
  if (readMore) readMore.style.display = "none";
  if (readLess) readLess.style.display = "block";
}

// Function to close the read more text
function collapse(e) {
  if (e) e.preventDefault();
  answers.forEach((answer) => {
    answer.style.display = "none";
  });
  if (readLess) readLess.style.display = "none";
  if (readMore) readMore.style.display = "block";
}

// Add event listeners to the buttons

if (readMore && readLess) {
  readMore.addEventListener("click", expand);
  readLess.addEventListener("click", collapse);
}

// Open book appointment modal
if (registerLink.length && modal) {
  registerLink.forEach((regLink) => {
    regLink.addEventListener("click", (e) => {
      e.preventDefault(); //this prevents the link from going to # first
      modal.style.display = "block";
    });
  });
}

// Close modal
if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (modal && e.target === modal) {
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
if (plus && float) {
  plus.addEventListener("click", (e) => {
    e.preventDefault();
    float.classList.toggle("show");
  });
}

//Removes the floating btn when any link is clicked
document.querySelectorAll("#floatList a").forEach((link) => {
  link.addEventListener("click", () => {
    if (float) float.classList.remove("show");
  });
});

// Close floating menu if clicked outside
document.addEventListener("click", (e) => {
  if (!float || !plus) return;
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
