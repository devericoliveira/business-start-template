function openMenu() {
  document.querySelector('.menu__navigation').classList.toggle('active');
}

document.querySelector('.hamburguer').addEventListener('click', openMenu);