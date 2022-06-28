'use strict';

const sumInput = () => {
  const values = [];

  while (true) {
    const value = prompt('Введите число:', '');

    if (value === null || value === '' || value.length !== value.replace(/\D/g, '').length) {
      break;
    }

    values.push(Number(value));
  }

  return values.reduce((acc, currentValue) => acc + currentValue, 0);
}
