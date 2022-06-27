'use strict';

let userLogin = prompt('Кто там?', '');

if (userLogin === 'Админ') {
  let userPassword = prompt('Пароль?', '');

  if (userPassword === 'Я главный') {
    alert('Здравствуйте!');
  } else if (userPassword === '' || userPassword === null) {
    alert('Отменено' );
  } else {
    alert('Неверный пароль');
  }
} else if (userLogin === '' || userLogin === null) {
  alert( 'Отменено' );
} else {
  alert( 'Я вас не знаю' );
}
