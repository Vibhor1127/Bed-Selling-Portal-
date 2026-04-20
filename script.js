// ── Cart ──
let cart = [];

function addToCart(item) {
  cart.push(item);
  showToast(`✓ "${item}" added to cart`);
  updateCartCount();
}

function updateCartCount() {
  const cartLink = document.querySelector('.nav-cart');
  if (cartLink) {
    cartLink.textContent = `🛒 Cart (${cart.length})`;
  }
}

// ── Toast Notification ──
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2400);
}

// ── Scroll Reveal ──
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
});

// ── Sticky Header Shadow ──
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(92,61,46,0.1)'
      : 'none';
  }
});
// Function to handle scroll animations
const revealElements = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealElements);

// Trigger once on load
document.addEventListener("DOMContentLoaded", revealElements);