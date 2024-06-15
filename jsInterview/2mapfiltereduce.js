const numArr = [1, 2, 3];
//map() is a method of creating new array from existing one by applying function to each one of the element of first aaray

// const multiplyThree = numArr.map((e, i, numArr) => {
//   console.log(numArr);
//   return e * 3 + i;
// });

// console.log(multiplyThree);

//filter() takes each element of the  array  and it applies a conditional statement against it and
//if the condition is true the element gets pushed into the output array and if the condition returns  false
//the element doesnot get pushed in the output array
//Inshort filter returns only those element from the array which fulfils the provided criteria.

// const moreThanTwo = numArr.filter((e) => {
//   return e > 2;
// });

// console.log(moreThanTwo);

//Reduce() reduces an array of values down to just one value
//accumulator is basically result of previous computation
const sum = numArr.reduce((acc, e, i, arr) => {
  return acc + e;
}, 0);

console.log(sum);

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};


this.Map()