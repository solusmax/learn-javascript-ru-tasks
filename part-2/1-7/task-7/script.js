'use strict';

const getDayNumber = (date) => date.getDay() === 0 ? 6 : date.getDay() - 1;

const createCalendar = (elem, year, month) => {
  const date = new Date(year, month - 1);

  let tableContent = '<table>';

  let daysRow = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>'

  tableContent += daysRow;
  tableContent += '<tr>';

  for (let i = 0; i < getDayNumber(date); i++) {
    tableContent += '<td></td>';
  }

  while (date.getMonth() === month - 1) {
    tableContent += '<td>' + date.getDate() + '</td>';

    if (getDayNumber(date) % 7 === 6) {
      tableContent += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDayNumber(date) !== 0) {
    for (let i = getDayNumber(date); i < 7; i++) {
      tableContent += '<td></td>';
    }
  }

  tableContent += '</tr></table>';

  elem.innerHTML = tableContent;
}


createCalendar(document.querySelector('#calendar'), 1995, 7);
