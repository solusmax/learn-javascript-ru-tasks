'use strict';

const getRandomInteger = (min = 0, max = 1) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);

  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

const shuffle = (array) => {
  let index = -1;

  while (++index < array.length) {
    const randomNumber = getRandomInteger(index, array.length - 1);
    [array[randomNumber], array[index]] = [array[index], array[randomNumber]];
  }

  return array;
};
