const burgerMenu = document.querySelector('.burger_menu');
const burger = document.querySelector('.butMobile_1');
const menuClose = document.querySelector('.burger_menu-close');
function toggleMenu() {
    burgerMenu.classList.toggle('hidden');
}
burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
