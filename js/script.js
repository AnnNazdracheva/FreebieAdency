"use strict"

const swiper = new Swiper('.swiper-main', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.pagination__items',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return '<div class="pagination__item ' + className + '"><span>0' + (index + 1) + '</span></div>';
    },
  },

});
const reviewsSwiper = new Swiper('.swiper-reviews', {
  autoHeight: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-reviews__button-next',
    prevEl: '.swiper-reviews__button-prev',
  },

});

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target; 
  // Tabs
  if (targetElement.closest('.nav-works__item')) {
    const tabNavItem = targetElement.closest('.nav-works__item');
    if (!tabNavItem.classList.contains('active')) {
      const activeTabNavItem = document.querySelector('.nav-works__item.active');
      activeTabNavItem.classList.remove('active');
      tabNavItem.classList.add('active');

      const tabItems = document.querySelectorAll('.works__tab');
      const activeTabItem = document.querySelector('.works__tab.active');

      activeTabItem.classList.remove('active');
      tabItems[getIndex(tabNavItem)].classList.add('active');

    }
  }
  function getIndex(el) {
    return Array.from(el.parentNode.children).indexOf(el);
  }

  // Menu 
  if (targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ?  
      document.documentElement.classList.remove('menu-open') : null;

    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    // const headerHeight = document.querySelector('.header').offsetHeight;

    if(goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop,
        behavior: "smooth",
      });
    }
    e.preventDefault();
  }
}  