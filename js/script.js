// SHOW HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICKED NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  // Link Active
  navLink.forEach((e) => e.classList.remove("link-active"));
  this.classList.add("link-active");

  // Remove Header Menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2000",
});

// Header Animation
sr.reveal(".nav__logo");
sr.reveal(".nav__item", { interval: "200", delay: "200" });
sr.reveal(".nav__button", { delay: "1300" });

// Home Animation
sr.reveal(".home__title", { delay: "300" });
sr.reveal(".home__text", { delay: "500" });
sr.reveal(".home__button", { delay: "700" });
sr.reveal(".home__img", { delay: "500", origin: "right" });
