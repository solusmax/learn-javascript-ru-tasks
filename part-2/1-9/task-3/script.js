'use strict';

const fieldElement = document.querySelector('#field');
const ballElement = document.querySelector('#ball');

ballElement.style.left = `${Math.round(fieldElement.clientWidth / 2 - ballElement.offsetWidth / 2)}px`;
ballElement.style.top = `${Math.round(fieldElement.clientHeight / 2 - ballElement.offsetHeight / 2)}px`;
