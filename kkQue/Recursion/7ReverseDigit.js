const rev = (n) => {
  let sum = 0;
  const reverseDigit = (num) => {
    console.log(num);
    if (num == 0) {
      return 0;
    }
    rem = num % 10;
    sum = sum * 10 + rem;

    reverseDigit(Math.floor(num / 10));
  };
  reverseDigit(n);
  return sum;
};

const a = rev(456);
console.log(a);

//2 without sum variable

const count = (n) => {
  const arg = Math.floor(Math.log10(n) + 1);
  return helper(n, arg);
};

console.log(count(34567890));
