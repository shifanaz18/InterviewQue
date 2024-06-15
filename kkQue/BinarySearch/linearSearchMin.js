function findMin(arr) {
  if (!arr) {
    return -1;
  }
  let min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
}

console.log(findMin([1, 3, 5, 77, 0]));
