document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
  });
});
