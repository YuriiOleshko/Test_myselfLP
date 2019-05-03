let btn = document.querySelector('.toggle-icon');
let menu = document.querySelector('.nav__menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('pushed');
  menu.classList.toggle('nav__menu--on');
});
