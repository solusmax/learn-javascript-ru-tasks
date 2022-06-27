'use strict';

let timerId;

const updateClock = () => {
  const clock = document.querySelector('.clock');
  const date = new Date();

  clock.querySelector('.hour').innerHTML = addZeroDigit(date.getHours());
  clock.querySelector('.min').innerHTML = addZeroDigit(date.getMinutes());
  clock.querySelector('.sec').innerHTML = addZeroDigit(date.getSeconds());
}

const addZeroDigit = (num) => num >= 10 ? num : '0' + num;

const clockStart = () => {
  if (!timerId) {
    timerId = setInterval(updateClock, 1000);
  }

  updateClock();
}

const clockStop = () => {
  clearInterval(timerId);

  timerId = null;
}

const clockStartButtonElement = document.querySelector('.clock-start-button');
const clockStopButtonElement = document.querySelector('.clock-stop-button');

clockStartButtonElement.addEventListener('click', clockStart);
clockStopButtonElement.addEventListener('click', clockStop);
