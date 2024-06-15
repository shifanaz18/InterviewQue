function sum() {
  const obj = {};
  return function (a, b) {
    console.log("obj is", obj);
    if (!obj[`${a},${b}`]) {
      console.log("inside if");
      obj[`${a},${b}`] = a + b;
    }
    return obj[`${a},${b}`];
  };
}

const memoizesSum = sum();

console.log(memoizesSum(3, 4));
console.log(memoizesSum(3, 4));
