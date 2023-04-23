const menuHamburger2 = document.querySelector("#hamburger-icon");
const launcherMenu = document.querySelectorAll(".launcher");

menuHamburger2.addEventListener('click', () => {
  launcherMenu.forEach((link) => {
    link.classList.toggle('launcher-remove');
  });
});