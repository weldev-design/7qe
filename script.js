const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("7qe-theme");

if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.dataset.theme = "light";
}

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("7qe-theme", nextTheme);
});

document.querySelectorAll(".supporter-card").forEach((card) => {
  card.addEventListener("click", () => {
    const wasActive = card.classList.contains("is-active");
    document.querySelectorAll(".supporter-card.is-active").forEach((item) => item.classList.remove("is-active"));
    if (!wasActive) card.classList.add("is-active");
  });
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
