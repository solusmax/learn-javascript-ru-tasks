'use strict';

const sumToCycle = (n) => new Array(n)
  .fill()
  .map((_, i) => i + 1)
  .reduce((acc, currentValue) => acc + currentValue, 0);

const sumToRecursion = (n) => n === 1 ? 1 : n + sumToRecursion(n - 1);

const sumToProgression = (n) => n * (n + 1) / 2;
