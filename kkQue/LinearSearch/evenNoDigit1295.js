const findNumbers = (arr) => {
  let count = 0;
  for (const num of arr) {
    if (even(num)) count++;
  }
  return count;
};

const even = (num) => {
  let isEven = countDigits(num);
  return isEven % 2 == 0;
};

const countDigits = (num) => {
  if (num < 0) {
    num = num * -1;
  }
  if (num == 0) {
    return 1;
  }
  digi = 0;
  while (num > 0) {
    digi++;
    num = Math.floor(num / 10);
  }
  return digi;
};

function findNos2(arrs) {
  let count = 0;
  for (let val of arrs) {
    let digit = Math.floor(Math.log10(val) + 1);
    if (digit % 2 == 0) {
      count++;
    }
  }
  return count;
}

console.log(findNumbers([555, 901, 482, 1771]));
