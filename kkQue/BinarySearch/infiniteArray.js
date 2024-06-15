const findIndex = (arr, target) => {
  console.log(boxLength(arr, target));
};

const boxLength = (arr, target) => {
  let start = 0;
  let end = 1;
  while (target > arr[end]) {
    // console.log("here", target);
    temp = end + 1; ///new start
    end = end + (end - start + 1) * 2;
    // console.log(temp);
    start = temp;
    console.log(start, end);
  }
  //
  return search(arr, target, start, end);
};

const search = (arr, target, start, end) => {
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // console.log(
    //   "binary ",
    //   start,
    //   end,
    //   arr.length,
    //   arr[mid],
    //   mid,
    //   arr[mid] === target
    // );
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

findIndex(
  [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  19
);
