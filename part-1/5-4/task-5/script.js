'use strict';

const getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let startSum = 0;

    for (let j = i; j < arr.length; j++) {
      startSum += arr[j];

      maxSum = Math.max(maxSum, startSum);
    }
  }

  return maxSum;
}
