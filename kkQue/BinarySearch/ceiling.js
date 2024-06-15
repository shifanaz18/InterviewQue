//ceiling is smallest element in an array greater or equal to target element.
//let arr[1,2,4,5,17,19,20]....ceiling(arr,target=17)=17 .....ceiling(arr,target=18)=19

const findCeiling = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  if (target > arr[arr.length - 1]) {
    return -1;
  }
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return start;
};

console.log(findCeiling([1, 2, 4, 6, 18, 20, 33], 24));
