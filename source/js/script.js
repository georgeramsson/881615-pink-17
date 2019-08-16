var navMain = document.querySelector('.main-nav__wrapper');
var navList = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__wrapper--no-js');
navList.classList.remove('main-nav__list--no-js');
navToggle.classList.remove('main-nav__toggle--no-js');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__wrapper--closed')) {
      navMain.classList.remove('main-nav__wrapper--closed');
      navMain.classList.add('main-nav__wrapper--opened');
    } else {
      navMain.classList.add('main-nav__wrapper--closed');
      navMain.classList.remove('main-nav__wrapper--opened');
    }
  });

navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('main-nav__toggle--closed')) {
      navToggle.classList.remove('main-nav__toggle--closed');
      navToggle.classList.add('main-nav__toggle--opened');
    } else {
      navToggle.classList.add('main-nav__toggle--closed');
      navToggle.classList.remove('main-nav__toggle--opened');
    }
  });

navToggle.addEventListener('click', function() {
    if (navList.classList.contains('main-nav__list--closed')) {
      navList.classList.remove('main-nav__list--closed');
      navList.classList.add('main-nav__list--opened');
    } else {
      navList.classList.add('main-nav__list--closed');
      navList.classList.remove('main-nav__list--opened');
    }
  });
