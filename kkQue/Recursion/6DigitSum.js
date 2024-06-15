const digitSum = (n) => {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + digitSum(Math.floor(n / 10));
};

console.log(digitSum(1345));

//product of n numbers

const digitProd = (n) => {
  if (n % 10 == n) {
    return n;
  }
  return (n % 10) * digitProd(Math.floor(n / 10));
};

console.log(digitProd(105));
