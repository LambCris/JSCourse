const burger = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu_list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
});
