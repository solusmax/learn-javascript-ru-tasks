'use strict';

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += Number(prompt('Введите число:', 0));
  }
}
