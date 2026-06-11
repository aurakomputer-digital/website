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

setTimeout(() => {
  window.whatsappWidget("#whatsapp-widget", {
    businessInfo: {
      name: "Aura Komputer",
      tagline:
        "Jasa Pembuatan dan Penjualan Aplikasi terbaik berbasis Web, Desktop, dan Mobile",
    },
    businessHours: {
      enabled: true,
      schedule: {
        mon: {
          open: "09:00",
          close: "16:00",
        },
        tue: {
          open: "09:00",
          close: "16:00",
        },
        wed: {
          open: "09:00",
          close: "16:00",
        },
        thu: {
          open: "09:00",
          close: "16:00",
        },
        fri: {
          open: "09:00",
          close: "16:00",
        },
      },
      offlineMessage:
        "Mohon maaf mungkin response kami sedikit lambat dikarenakan sedang tidak di jam kerja!",
    },

    departments: [
      {
        id: "sales",
        name: "Konsultasi",
        description: "Konsultasi Jasa / Produk, tanya tanya juga boleh",
        icon: "💰",
        members: [
          {
            id: "mohamad-supangat",
            name: "Mohamad Supangat",
            phone: "+6285161748582",
            avatar:
              "https://placehold.co/400x400?text=Moha&bg=FF6B6B&color=fff",
            title: "Sales Manager",
            skills: ["Layanan Customer", "Konsultasi"],
            isOnline: true,
          },
        ],
      },
      {
        id: "support",
        name: "Technical Support",
        description: "Bantuan Support Pelanggan",
        icon: "🛠️",
        members: [
          {
            id: "mohamad-supangat",
            name: "Mohamad Supangat",
            phone: "+6285161748582",
            avatar:
              "https://placehold.co/400x400?text=Moha&bg=FF6B6B&color=fff",
            title: "Senior Developer",
            skills: ["Pengembang Aplikasi", "Bantuan Teknikal"],
            isOnline: true,
          },
        ],
      },
    ],
    leadCapture: {
      enabled: false,
      showBefore: "member-selection",
      fields: {
        name: {
          required: true,
          placeholder: "Nama",
        },
        email: {
          required: false,
          placeholder: "Nama Sekolah / Asal Daerah",
        },
      },
    },
    quickMessages: [
      {
        category: "general",
        messages: [
          {
            label: "Demo Produk",
            text: "Saya ingin mencoba demo aplikasi",
          },
          {
            label: "Tanya Harga",
            text: "Apakah saya boleh tanya harga untuk pembuatan aplikasi ?",
          },
          {
            label: "Bantuan Teknis",
            text: "Saya butuh bantuan teknis",
          },
          {
            label: "Partner",
            text: "Saya tertarik untuk menjadi partner",
          },
        ],
      },
    ],
    analytics: {
      enabled: false,
      events: {},
    },
    position: "bottom-right",
    autoOpen: true,
    showBranding: false,
    theme: {
      brandColors: {
        primary: "#25d366",
        secondary: "#128c7e",
        accent: "#6c5ce7",
      },
      typography: {
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "14px",
      },
    },
  });
}, 10000);
