console.log("Hello World");

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
menuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden", !isOpen);
  iconClose.classList.toggle("hidden", isOpen);
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => io.observe(el));

// Contact form
document.getElementById("contactForm").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const btn = ev.target.querySelector("button");
  const original = btn.textContent;
  btn.textContent = "Terkirim ✓";
  btn.classList.add("bg-emerald-400", "text-white");
  btn.classList.remove("bg-white", "text-brand-700");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("bg-emerald-400", "text-white");
    btn.classList.add("bg-white", "text-brand-700");
    ev.target.reset();
  }, 2500);
});

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("shadow-md");
  else navbar.classList.remove("shadow-md");
});
