function factorial(n) {
  let result = 1;
  if (n === 0) {result = 1;} else 
  for (let i = 1; i <= n; i++) {
    result = result*i; 
  }
return result;
}
