'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const getTotalSalary = (obj) => Object.values(obj).reduce((acc, currentSalary) => acc + currentSalary, 0);

