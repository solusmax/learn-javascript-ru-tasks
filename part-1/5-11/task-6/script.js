'use strict';

const getSecondsToday = () => {
  const date = new Date();

  return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
}
