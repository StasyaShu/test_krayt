import '../vendor/swiper.js';

const initSwiper = () => {
  const slider = document.querySelector('.swiper');

  if (!slider) {
    return;
  }
  const buttonNext = document.querySelector('.promo__controls--next');
  const buttonPrev = document.querySelector('.promo__controls--prev');
  // eslint-disable-next-line
  const swiper = new Swiper(slider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.promo__pagination',
      clickable: true
    },
  });
};

export {initSwiper};
