document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start", // Scroll to the start of the target
          inline: "nearest", // Scroll to the nearest edge
        });
      }
    });
  });
});
