'use strict';

const vasya = {
  name: "Вася",
  surname: "Пупкин",
  id: 1
};

const petya = {
  name: "Петя",
  surname: "Иванов",
  id: 2
};

const masha = {
  name: "Маша",
  surname: "Петрова",
  id: 3
};

const users = [vasya, petya, masha];

const resultUsers = users.map((el) => {
  return {
    id: el.id,
    fullName: `${el.name} ${el.surname}`
  }});

