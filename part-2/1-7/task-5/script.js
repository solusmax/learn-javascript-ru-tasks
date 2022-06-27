'use strict';

const createTree = (container, obj) => {
  container.append(createTreeDom(obj));
}

const createTreeDom = (obj) => {
  if (!Object.keys(obj).length) return;

  const list = document.createElement('ul');

  for (const [key, value] of Object.entries(obj)) {
    const item = document.createElement('li');
    item.innerHTML = key;

    const childrenList = createTreeDom(value);

    if (childrenList) {
      item.append(childrenList);
    }

    list.append(item);
  }

  return list;
}

const data = {
  'Рыбы': {
    'форель': {},
    'лосось': {}
  },
  'Деревья': {
    'Огромные': {
      'секвойя': {},
      'дуб': {}
    },
    'Цветковые': {
      'яблоня': {},
      'магнолия': {}
    }
  }
};

const container = document.querySelector('#container');
createTree(container, data);
