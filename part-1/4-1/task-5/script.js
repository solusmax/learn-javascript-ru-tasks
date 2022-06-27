'use strict';

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const doubleEveryNumericProperty = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof(value) === 'number') {
      obj[key] = value * 2;
    }
  }
};

