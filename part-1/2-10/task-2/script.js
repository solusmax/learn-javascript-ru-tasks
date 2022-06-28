'use strict';

let userAnswer = prompt('Какое «официальное» название JavaScript?', '');

if (userAnswer.toLowerCase() === 'ecmascript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!')
};
