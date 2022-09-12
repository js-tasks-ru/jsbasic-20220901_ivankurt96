function sumSalary(salaries) {
let sum = 0;
for (let key in salaries) {if (isNaN (salaries[key]) === true) {break;}
  if (typeof salaries[key] === 'number')
  {sum = sum + salaries[key];
  }
} 
return (sum);
}