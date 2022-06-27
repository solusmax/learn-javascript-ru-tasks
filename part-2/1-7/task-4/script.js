'use strict';

const list = document.createElement('ul');

document.body.append(list);

while (true) {
  const itemText = prompt("Текст элемента списка:", "");

  if (itemText === null || itemText === '') {
    break;
  }

  const item = document.createElement('li');
  item.textContent = itemText;
  list.append(item);
}
