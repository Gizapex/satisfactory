const menuHamburger = document.querySelector("#hamburger-icon");
const mobileMenu = document.querySelectorAll(".nav-links");

menuHamburger.addEventListener('click', () => {
  mobileMenu.forEach((link) => {
    link.classList.toggle('mobile-menu');
  });
});