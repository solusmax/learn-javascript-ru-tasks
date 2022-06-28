'use strict';

Function.prototype.defer = function(ms) {
  const func = this;

  return function(...args) {
    setTimeout(() => func.apply(this, args), ms);
  }
};
