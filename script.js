document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.style.scrollBehavior = "smooth";

        // Calculate the target scroll position
        const targetOffset =
          target.getBoundingClientRect().top + window.scrollY;
        const adjustedOffset = targetOffset - 80;

        // Scroll to the adjusted position
        window.scrollTo({
          top: adjustedOffset,
          behavior: "smooth",
        });

        // Reset scroll behavior after scrolling
        setTimeout(() => {
          target.style.scrollBehavior = "auto";
        }, 500); // You can adjust the delay time as needed
      }
    });
  });
});



