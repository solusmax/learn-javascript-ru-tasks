'use strict';

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
};

const topSalary = (salaries) => {
  let maxSalary = 0;
  let highestPaidName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      highestPaidName = name;
    }
  }

  return highestPaidName;
}
