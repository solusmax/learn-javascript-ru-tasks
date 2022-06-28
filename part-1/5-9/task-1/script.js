'use strict';

const salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

const sumSalaries = (salaries) => {
  let result = 0;

  for (const salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}
