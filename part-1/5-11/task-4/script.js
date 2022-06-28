'use strict';

const getDateAgo = (date, days) => {
  const currentDate = new Date(date);

  currentDate.setDate(date.getDate() - days);

  return currentDate.getDate();
}
