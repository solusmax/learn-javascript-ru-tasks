'use strict';

const inBetween = (a, b) => (x) => (x >= a) && (x <= b);

const inArray = (arr) => (x) => arr.includes(x);
