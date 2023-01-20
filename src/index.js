const iconMenu = document.querySelector(".menu-icon"),
  iconClose = document.querySelector(".icon-close"),
  navMobile = document.querySelector(".nav__mobile");

iconMenu.addEventListener("click", () => {
  navMobile.classList.add("nav__mobile--visible");
});

iconClose.addEventListener("click", () => {
  navMobile.classList.remove("nav__mobile--visible");
});
