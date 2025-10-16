// ============================================
// THEME TOGGLE - Dark/Light Mode
// ============================================
function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector(".theme-toggle");

  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  btn.textContent = isDarkMode ? "☀️" : "🌙";
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  const btn = document.querySelector(".theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️";
  }
});

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyCode(btn) {
  const codeBlock = btn.closest(".code-block").querySelector("code");
  const text = codeBlock.innerText;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      btn.classList.add("copied");
      btn.textContent = "✓ Copied!";

      setTimeout(() => {
        btn.classList.remove("copied");
        btn.textContent = "Copy";
      }, 2000);
    })
    .catch(() => {
      alert("Gagal copy kode");
    });
}

// ============================================
// SMOOTH SCROLLING UNTUK DAFTAR ISI
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
