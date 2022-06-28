'use strict';

const formatDate = (date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = addZeroDigit(date.getMonth() + 1);
  const day = date.getDate();
  const hour = addZeroDigit(date.getHours());
  const minute = addZeroDigit(date.getMinutes());

  const diffMs = new Date() - date;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${day}.${month}.${year} ${hour}:${minute}`
  }
}

const addZeroDigit = (num) => num >= 10 ? num : '0' + num;
