'use strict';

const aclean = (arr) => {
  const result = new Map();

  for (const word of arr) {
    const sortedWord = word
      .toLowerCase()
      .split('')
      .sort()
      .join('');

    result.set(sortedWord, word);
  }

  return [...result.values()];
}
