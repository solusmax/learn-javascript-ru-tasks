'use strict';

const getSecondsToTomorrow = () => {
  const date = new Date();

  return 24 * 60 * 60 - (date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds());
}
