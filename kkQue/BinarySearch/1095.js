const findInMountainArray = (arr, target) => {
  const peak = peakIndexInMountainArray(arr);
  console.log(peak);
  const firstTry = orderAgnostic(arr, target, 0, peak);
  if (firstTry != -1) {
    return firstTry;
  } else return orderAgnostic(arr, target, peak + 1, arr.length - 1);
};

const peakIndexInMountainArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

const orderAgnostic = (arr, target, start, end) => {
  let isasc = arr[0] < arr[arr.length - 1];
  return binarySearch(arr, target, isasc, start, end);
};

const binarySearch = (arr, target, isasc, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid);
    if (target == arr[mid]) {
      //   console.log(mid);
      return mid;
    }
    if (arr[start] < arr[end]) {
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
  return -1;
};

console.log(findInMountainArray([1, 2, 3, 4, 5, 3, 1], 1));
