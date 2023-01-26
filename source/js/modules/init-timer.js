import {inclineWord} from '../utils/incline-word.js';

const timerBlock = document.querySelector('[data-timer-date]');
let timer;

const getTimeRemaining = (time) => {
  const diff = (Date.parse(time) - Date.parse(new Date())) / 1000; // разница в секундах

  if (diff <= 0) {
    return false;
  }

  // const days = Math.floor(diff / 60 / 60 / 24);
  const hours = Math.floor((diff / 60 / 60)); // рассчет часов с днями Math.floor((diff / 60 / 60) % 24)
  const minuts = Math.floor((diff / 60) % 60);
  const seconds = Math.floor(diff % 60);

  return {
    // days,
    hours,
    minuts,
    seconds,
  };
};

const updateTime = (el, value, typeEnding) => {
  const number = el.querySelector('[data-timer-number]');
  const name = el.querySelector('[data-timer-name]');
  number.textContent = ('' + value).slice(-3);
  name.textContent = inclineWord(value, typeEnding);
};

const formatRusdate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.getMonth();
  const monthTitle = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const year = date.getFullYear() + 'г.';
  return `${day} ${monthTitle[month]} ${year}`;
};

const initTimer = () => {
  if (!timerBlock) {
    return;
  }

  // const dayWrap = timerBlock.querySelector('[data-timer-day]');
  const hourWrap = timerBlock.querySelector('[data-timer-hour]');
  const minutWrap = timerBlock.querySelector('[data-timer-minut]');
  const secondWrap = timerBlock.querySelector('[data-timer-second]');

  timer = setInterval(() => {
    const time = getTimeRemaining(timerBlock.dataset.timerDate);
    const timerList = document.querySelector('[data-timer-list]');
    const timerTitle = document.querySelector('[data-timer-title]');
    if (!time) {
      timerList.style.display = 'none';
      timerTitle.textContent = 'Конец распродажи';
      const nowDate = new Date();
      const dateSpan = document.createElement('span');
      dateSpan.textContent = formatRusdate(nowDate);
      timerBlock.classList.add('timer-stopped');
      timerBlock.appendChild(dateSpan);
      clearInterval(timer);
      return;
    }
    // updateTime(dayWrap, time.days, 'dayEndings');
    updateTime(hourWrap, time.hours, 'hourEndings');
    updateTime(minutWrap, time.minuts, 'minutEndings');
    updateTime(secondWrap, time.seconds, 'secondEndings');
  }, 1000);
};

export {initTimer};