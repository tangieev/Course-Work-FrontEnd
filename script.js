// Меню Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body') 
if(iconMenu){
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });


  function onMenuLinkClick(e){
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if(iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });

      e.preventDefault();
    }
  }
}

var swiper = new Swiper(".mySwiper_1", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });
  var swiper = new Swiper(".mySwiper_2", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });
  var swiper = new Swiper(".mySwiper_3", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });
  var swiper = new Swiper(".mySwiper_4", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });
  var swiper = new Swiper(".mySwiper_5", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });
  
  var swiper = new Swiper(".mySwiper_6", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    // keyboard: true,
  });