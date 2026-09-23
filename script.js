document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-plan]").forEach((item) => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
    });
  });
});
