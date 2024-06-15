const a = [1, 2, 3, [4, [5, 6]], 7, 8];

function flattenArr(arr) {
  let newArr = [];
  function nestedFlat(a) {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        nestedFlat(a[i]);
      } else {
        newArr.push(a[i]);
      }
    }
  }
  nestedFlat(arr);
  return newArr;
}

console.log(flattenArr(a));
