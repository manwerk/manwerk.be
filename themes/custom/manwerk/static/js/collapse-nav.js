const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.nav__burger');
const navContent = document.querySelector('.nav__content');

burger.addEventListener('click', () => {
  document.body.classList.toggle('open-nav');
  navbar.classList.toggle('open-nav');
  navContent.classList.toggle('open-nav');
})

const menuItems = navContent.querySelectorAll('.list__item a');

menuItems.forEach( (link, index) => {

  link.addEventListener( 'click', () => {

    document.body.classList.toggle('open-nav');
    navbar.classList.toggle('open-nav');
    navContent.classList.toggle('open-nav');

  });
  
})