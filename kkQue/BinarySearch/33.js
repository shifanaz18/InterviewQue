const rotatednumsaySearch = (nums, target) => {
  const pivot = findPivot(nums);
  //   console.log(pivot);
  if (nums[pivot] == target) {
    return pivot;
  }
  if (pivot === -1) {
    return BinarySearch(nums, target, 0, nums.length - 1);
  }
  if (target > nums[0]) {
    return BinarySearch(nums, target, 0, pivot - 1);
  } else {
    return BinarySearch(nums, target, pivot + 1, nums.length - 1);
  }
};

const findPivot = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }
    if (nums[mid] <= nums[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const BinarySearch = (nums, target, start, end) => {
  // let start = 0;
  // let end = nums.length - 1;
  if (target > nums[nums.length - 1]) {
    return -1;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(rotatednumsaySearch([1], 1));
