// Dark mode toggle for every page, by Sanjay D S
(function () {
  const button = document.querySelector("#themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (button) button.textContent = "☀️";
    } else {
      document.body.classList.remove("dark");
      if (button) button.textContent = "🌙";
    }
  }

  // Load the saved theme (if the browser allows storage)
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("hackfest-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }
  applyTheme(savedTheme);

  if (!button) return;

  button.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);

    try {
      localStorage.setItem("hackfest-theme", newTheme);
    } catch (error) {
      // Storage blocked: the theme still changes for this visit
    }
  });
})();
