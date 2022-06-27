'use strict';

const tableElement = document.querySelector('table');

for (let i = 0; i < tableElement.rows.length; i++) {
  tableElement.rows[i].cells[i].style.backgroundColor = 'red';
}
