function findMax(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 89, 105, 8, 45]));
[(0, 10, 5, 2)]