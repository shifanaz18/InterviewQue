//it means we dont know if the array is ascending or descending

const orderAgnostic = (arr, target) => {
  let isasc = arr[0] < arr[arr.length - 1];
  return binarySearch(arr, target, isasc);
};

const binarySearch = (arr, target, isasc) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid);
    if (target == arr[mid]) {
      //   console.log(mid);
      return mid;
    }
    if (isasc) {
      //   console;
      if (target > arr[mid]) {
        start = mid + 1;
      } else if (target < arr[mid]) {
        end = mid - 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else if (target < arr[mid]) {
        start = mid + 1;
      }
    }
  }
};

console.log(orderAgnostic([9, 6, 3, 2, 0], 2));
