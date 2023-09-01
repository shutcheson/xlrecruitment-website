document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.style.scrollBehavior = "smooth";
        target.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest",
        });
        target.style.scrollBehavior = "auto";
      }
    });
  });
});
