const menuContent = document.querySelector(".menu-content");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  menuContent.classList.add("block");
  document.body.classList.add("full-height");
});

close.addEventListener("click", () => {
  menuContent.classList.remove("block");
  document.body.classList.remove("full-height");
});
