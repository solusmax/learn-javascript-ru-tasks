'use strict';

const tableElement = document.querySelector('table');

const sortedRows =[...tableElement.rows]
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

tableElement.tBodies[0].append(...sortedRows);
