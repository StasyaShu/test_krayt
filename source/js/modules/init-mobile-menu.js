const manageMobMenu = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.header');
  const button = menu.querySelector('.header__button');

  if (button) {
    button.addEventListener('click', () => {
      if (document.documentElement.clientWidth < 768) {
        menu.classList.toggle('is-open');
        body.style.overflow = 'hidden';

        if (!menu.classList.contains('is-open')) {
          body.style.overflow = 'scroll';
        } else {
          const menuLink = menu.querySelectorAll('a');

          menuLink.forEach(el => {
            el.addEventListener('click', () => {
              menu.classList.remove('is-open');
              body.style.overflow = 'scroll';
            })
          })
        }
      }
      window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 767) {
          menu.classList.remove('is-open');
        }
      })
    })
  }
}

export {manageMobMenu};