'use strict';

let userNumber;

do {
  userNumber = prompt('Введите число больше 100:', '');
} while (userNumber <= 100 && userNumber !== null);
