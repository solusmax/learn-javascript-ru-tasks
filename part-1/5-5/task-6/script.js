'use strict';

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = function(str) {
    const parts = str.split(' ');
    const operation = parts[1];
    const a = Number(parts[0]);
    const b = Number(parts[2]);

    if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operation](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
