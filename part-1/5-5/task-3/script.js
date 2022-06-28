'use strict';

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
