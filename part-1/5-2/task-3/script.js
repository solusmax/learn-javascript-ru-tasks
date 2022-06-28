'use strict';

const readNumber = () => {
  let value = '';

  while (true) {
    value = prompt('Введите число:', '')

    if (value === null || value === '') {
      return null;
    }

    if (value.length === value.replace(/\D/g, '').length) {
      break;
    }
  }

  return Number(value);
}

