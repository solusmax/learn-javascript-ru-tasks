'use strict';

function Calculator() {
  this.read = function() {
    this.property1 = Number(prompt('Первое число:', 0));
    this.property2 = Number(prompt('Второе число:', 0));
  };

  this.sum = function() {
    return this.property1 + this.property2;
  };

  this.mul = function() {
    return this.property1 * this.property2;
  };
}
