'use strict';

let user = {
  name1: "John",
  years: 30
};

let {
  name1,
  years: age,
  isAdmin = false
} = user;
