var numberOfSteps = function (num) {
  let steps = 0;
  return helper(num, 0);
};

const helper = (n, steps) => {
  if (n == 0) {
    return steps;
  }

  if (n % 2 == 0) {
    return helper(Math.floor(n / 2), steps + 1);
  }
  return helper(Math.floor(n - 1), steps + 1);
};

console.log(numberOfSteps(14));
