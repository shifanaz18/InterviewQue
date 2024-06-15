// var searchRange = function (nums, target) {
//   let nums = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       nums.push(i);
//     }
//   }
//   if (nums.length > 0) return [nums[0], nums[nums.length - 1]];
//   else return [-1, -1];
// };

var searchRange = function (nums, target) {
  let arr = [-1, -1];
  arr[0] = search(nums, target, true);
  arr[1] = search(nums, target, false);
  console.log(arr[0]);
  if (arr[0] != -1) {
    return arr;
  } else return arr;
};

var search = function (nums, target, findStart) {
  console.log(target);
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid, start, end);
    if (target > nums[mid]) {
      start = mid + 1;
    }
    if (target < nums[mid]) {
      end = mid - 1;
    }
    if (target == nums[mid]) {
      ans = mid;
      console.log(mid, "dyu");
      if (findStart) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 1));
