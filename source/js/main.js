import * as flsFunctions from './utils/functions.js';
import {initSwiper} from './slider/initSwiper.js';
import {initCustomSelect} from './modules/init-custom-select.js';
import {initTimer} from './modules/init-timer.js';
import {manageMobMenu} from './modules/init-mobile-menu.js';

window.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  initCustomSelect();
  initSwiper();
  initTimer();
  manageMobMenu();
})




