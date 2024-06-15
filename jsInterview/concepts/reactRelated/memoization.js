function sum() {
  const obj = {};
  function memo(a, b) {
    console.log("obj is", obj);
    if (!obj[`${a},${b}`]) {
      console.log("inside if");
      obj[`${a},${b}`] = a + b;
    }
    return obj[`${a},${b}`];
  }
  memo();
}

// const memoizesSum = sum();
// console.log(memoizesSum)

console.log(sum(3, 4));
console.log(sum(3, 4));
