const binarySearch = (arr, target, s, e) => {
  let mid = Math.floor(s + (e - s) / 2);
  if (s > e) {
    return -1;
  }
  if (arr[mid] == target) return mid;

  if (arr[mid] > target) return binarySearch(arr, target, s, mid - 1);

  return binarySearch(arr, target, mid + 1, e);
};

let arrs = [1, 8, 9, 12, 98];
console.log(binarySearch(arrs, 98, 0, arrs.length - 1));
