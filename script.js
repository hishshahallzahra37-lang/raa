// =========================
// Dark / Light Toggle Button
// =========================
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Mode Gelap / Terang";
toggleBtn.classList.add("toggle-mode");
document.body.appendChild(toggleBtn);

let isDark = true;

toggleBtn.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.toggle("light", !isDark);
});

// =========================
// Fade-In Animation on Scroll
// =========================
const cards = document.querySelectorAll(".card");

function fadeInCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInCards);
window.addEventListener("load", fadeInCards);

// =========================
// Back-to-top button
// =========================
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
