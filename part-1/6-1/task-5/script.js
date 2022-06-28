'use strict';

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseListCycle(list) {
  if (list.next) {
    printReverseListCycle(list.next);
  }

  console.log(list.value);
}

function printReverseListRecursion(list) {
  const array = [];
  let temp = list;

  while (temp) {
    array.push(temp.value);
    temp = temp.next;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverseListCycle(list);
printReverseListRecursion(list);
