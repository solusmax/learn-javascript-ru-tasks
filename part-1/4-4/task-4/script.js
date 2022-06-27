'use strict';

const calculator = {
  read() {
    this.property1 = Number(prompt('Первое число:', 0));
    this.property2 = Number(prompt('Второе число:', 0));
  },
  sum() {
    return this.property1 + this.property2;
  },
  mul() {
    return this.property1 * this.property2;
  }
}

