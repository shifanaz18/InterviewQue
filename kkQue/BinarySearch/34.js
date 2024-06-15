var searchRange = function (nums, target) {
  let ans = [-1, -1];
  ans[0] = search(nums, target, true);
  if (ans[0] != -1) {
    ans[1] = search(nums, target, false);
  }
  return ans;
};

const search = (nums, target, findStart) => {
  ans = -1;
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      ans = mid;
      if (findStart) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 0));

// brute force  logic
var searchRange = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      arr.push(i);
    }
  }
  if (arr.length > 0) return [arr[0], arr[arr.length - 1]];
  else return [-1, -1];
};
