'use strict';

const someObject = {};

function A() {
  return someObject;
}

function B() {
  return someObject;
}

console.log(new A() === new B());
