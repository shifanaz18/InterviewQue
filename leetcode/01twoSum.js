/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target)
//                 return [i, j];

//         }

//     }
// };

var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] != undefined) {
            return [i, obj[nums[i]]]
        }
        obj[(target - nums[i])] = i;
    }
};



console.log(twoSum([2, 7, 11, 15], 22))

// nums = [2,7,11,15], target = 9