// Hide Loader after 2s
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 1500);
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Load stored theme
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", stored);
});
// Typewriter Effect
const typedText = document.getElementById('typed-text');
const phrases = [
  "Welcome to Frontend Battle 2.0",
  "Where creativity meets code",
  "Unleash your inner developer"
];
let currentPhrase = 0;
let i = 0;

function type() {
  if (i < phrases[currentPhrase].length) {
    typedText.textContent = phrases[currentPhrase].substring(0, i + 1) + '|';
    i++;
    setTimeout(type, 70);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (i > 0) {
    typedText.textContent = phrases[currentPhrase].substring(0, i - 1) + '|';
    i--;
    setTimeout(erase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Simple scroll reveal
const revealCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease-out';
});

const revealFeatures = () => {
  const features = document.querySelectorAll('.feature-box');
  features.forEach((box, i) => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
      }, i * 150); // stagger each item
    }
  });
};

const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-card');

const updateSlide = () => {
  carouselTrack.scrollTo({
    left: slideIndex * carouselTrack.clientWidth,
    behavior: 'smooth'
  });
};

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlide();
});

// Optional: Auto-slide
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlide();
}, 7000);

// Ripple effect
document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add('ripple');

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Parallax scroll effect
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax-bg');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

