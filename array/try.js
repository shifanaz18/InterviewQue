var findInMountainArray = function (target, mountainArr) {
  let end = findPeak(mountainArr);
  console.log(end, "peak");
  let ans = binarySearch(0, end, target, mountainArr);
  return ans;
  // return end;
};

function findPeak(mountainArr) {
  console.log(mountainArr, "arr");
  let start = 0;
  let end = mountainArr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mountainArr[mid] > mountainArr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
function binarySearch(start, end, target, arr) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]));
