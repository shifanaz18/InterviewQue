function linearSearch(arr, t) {
  if (arr.length < 0) {
    return -1;
  }

  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  //     if (element == t) {
  //       return index;
  //     }
  //   }

  for (let val of arr) {
    if (val == t) return true;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 66, 98], 0));
