let c = 0;
const count = (n) => {
  return helper(n, c);
};

const helper = (n, c) => {
  if (n == 0) {
    return c;
  }

  let rem = n % 10;
  if (rem == 0) {
    return helper(Math.floor(n / 10), c + 1);
  }
  return helper(Math.floor(n / 10), c);
};

console.log(count(340000));
