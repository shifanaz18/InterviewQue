const fact = (n) => {
  if (n == 1) return 1;
  return n * fact(n - 1);
};

console.log(fact(5));

//Sum of n numbers
const sum = (n) => {
  if (n == 1) return 1;
  return n + sum(n - 1);
};

console.log(sum(5));
