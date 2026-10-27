// Mobile menu and active page link, by Kandakuri Sirivani Swathi
(function () {
  const menuButton = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");

  // Open and close the menu on small screens
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Highlight the link of the page we are on
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") {
    currentPage = "index.html";
  }

  document.querySelectorAll("#navLinks a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
})();
