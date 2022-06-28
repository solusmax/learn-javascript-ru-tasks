'use strict';

const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const getWeekDay = (date) => days[date.getDay()];
