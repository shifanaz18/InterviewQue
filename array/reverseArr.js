function revArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
  return arr;
}

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

console.log(revArr([1, 2, 3, 4]));
