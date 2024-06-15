const custWealth = (arr) => {
  let maxWealth = 0;

  arr.forEach((cust) => {
    const customerWealth = cust.reduce((sum, val) => sum + val, 0);
    maxWealth = Math.max(maxWealth, customerWealth);
  });
  return maxWealth;
};

console.log(
  custWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

var maximumWealth = function (accounts) {
  let ans = Number.MIN_VALUE;
  for (let person = 0; person < accounts.length; person++) {
    let sum = 0;
    for (let account = 0; account < accounts[person].length; account++) {
      sum += accounts[person][account];
    }
    if (ans < sum) ans = sum;
  }
  return ans;
};
