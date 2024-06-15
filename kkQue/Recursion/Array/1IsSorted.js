const isSorted = (arr) => {
  let index = 0;
  return sorted(arr, 0);
};

const sorted = (arr, index) => {
  if (index == arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && sorted(arr, index + 1);
};
console.log(isSorted([1, 4, 8, 9, 5]));
