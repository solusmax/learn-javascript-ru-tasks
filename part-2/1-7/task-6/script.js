'use strict';

const items = document.querySelectorAll('li');

for (const item of items) {
  const innerItemsCount = item.querySelectorAll('li').length;

  if (!innerItemsCount) continue;

  item.firstChild.textContent += ' [' + innerItemsCount + ']';
}
