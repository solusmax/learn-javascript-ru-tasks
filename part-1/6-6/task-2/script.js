'use strict';

const sum = (a) => {
  let currentSum = a;

  const func = (b) => {
    currentSum += b;
    return func;
  }

  func.toString = () => currentSum;

  return func;
}
