function memoizeOne(fn) {
  let obj = {};
  return function (...rest) {
    if (!obj[JSON.stringify(rest)]) {
      let val = fn(...rest);
      obj[JSON.stringify(rest)] = val;
      return val;
    } else {
      console.log("memoized");
      return obj[JSON.stringify(rest)];
    }
    // console.log(rest);
    // console.log(fn.name);
  };
}

function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

function mul(a, b) {
  return a * b;
}
const memoizeAdd = memoizeOne(add);
const memoizeSquare = memoizeOne(square);
const memoizeMul = memoizeOne(mul);

console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeSquare(3));
console.log(memoizeMul(1, 2));
console.log(memoizeMul(1, 2));
